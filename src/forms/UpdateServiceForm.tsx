import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Alert, ApiServiceData, CreateApiServicePayload } from '../Api/Interfaces'
import { updateService } from '../Api/ApiAdmin'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getServiceByServiceId } from '../Api/ApiService'

const UpdateServiceForm = () => {

    const params = useParams()
    const apiId = Number(params.id)
    console.log("api id:", apiId)

    const [alertState, setAlertState] = useState<Alert | undefined>(undefined)
    const [service, setService] = useState<ApiServiceData | undefined>(undefined)

    const fetchApiData = async () => {
        const apidata = await getServiceByServiceId(apiId)
        console.log("responde is: ", apidata)
        setService(apidata)
    }

    const handleSubmit = async (values: CreateApiServicePayload) => {
        try {
            const response = await updateService(values, apiId)
            console.log("success: ", response.status)
            if (response.status !== 200)
                setAlertState({ type: "danger", message: "Unable to create a user" } as Alert)
            else
                setAlertState({ type: "success", message: "Service added." } as Alert)
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.data.detail)
                    setAlertState({ type: "danger", message: error.response?.data.detail } as Alert)
                else
                    setAlertState({ type: "danger", message: "An server error occured." } as Alert)
            } else {
                setAlertState({ type: "danger", message: "An error occured. Try again" } as Alert)
            }
        }
    }


    const updateServiceFormValidationSchema = yup.object().shape({
        name: yup.string().required('Service name is required'),
        port: yup
            .number()
            .required('Backend Port is required')
            .min(1, 'Port number must be at least 1')
            .max(65535, 'Port number must be at most 65535'),
        description: yup.string().required('Description is required'),
        documentation: yup
            .mixed()
            .nullable()
            .test(
                'fileFormat',
                'Unsupported Format. Only Markdown files are allowed.',
                (value) => !value || (value instanceof File && ['text/markdown', 'application/octet-stream'].includes(value.type))
            ),
    });


    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <>
            {
                service ?
                    <>
                        <Formik
                            initialValues={{
                                name: service?.name,
                                port: service?.port,
                                description: service?.description,
                                documentation: null
                            }}
                            validationSchema={updateServiceFormValidationSchema}
                            onSubmit={values => {
                                console.log(values);
                                handleSubmit(values)
                            }}
                        >
                            {({ errors, touched, setFieldValue }) => (
                                <Form className="card p-4" style={{ width: "400px" }}>
                                    {alertState ?
                                        <div className={`alert alert-${alertState.type}`} role="alert">
                                            {alertState.message}
                                        </div>
                                        :
                                        <></>
                                    }

                                    <h2>Add new API service</h2>

                                    <div className="row mb-3 mt-3">
                                        <label className="form-label">Service name</label>
                                        <Field className="form-control" id="name" name="name" type="text" />
                                        {touched.name && errors.name && <div id="emailHelp" className="form-text text-danger">{errors.name}</div>}
                                    </div>

                                    <div className="row mb-3">
                                        <label className="form-label">Backend Port</label>
                                        <Field className="form-control" id="port" name="port" type="number" />
                                        {touched.port && errors.port && <div id="emailHelp" className="form-text text-danger">{errors.port}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <Field className="form-control" id="description" name="description" type="text" />
                                        {touched.description && errors.description && <div id="emailHelp" className="form-text text-danger">{errors.description}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Documentation MD file</label>
                                        <input
                                            className="form-control"
                                            id="documentation"
                                            name="documentation"
                                            type="file"
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
                                                setFieldValue("documentation", file);
                                            }}
                                        />
                                        <ErrorMessage name="documentation" component="div" className="form-text text-danger" />
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-3">Update</button>
                                </Form>
                            )}
                        </Formik>
                    </>
                    :
                    <>
                        <div className="alert alert-warning" role="alert">Invalid Api id</div>
                    </>
            }



        </>
    )
}

export default UpdateServiceForm

