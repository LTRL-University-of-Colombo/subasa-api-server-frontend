import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { LoginPayload } from '../Api/Interfaces';
import { userLogin } from '../Api/ApiUser';
import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate()

    const [loginErrorMessage, setLoginErrorMessage] = useState('')
    const handleLogin = async (values: LoginPayload) => {
        try {
            const response: AxiosResponse = await userLogin(values)
            if (response.status == 200) {
                navigate("/")
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                setLoginErrorMessage(error.message)
            } else {
                setLoginErrorMessage("Unknown error occured!")
            }
        }
    }

    const loginFormValidationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')
    })

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={loginFormValidationSchema}
                onSubmit={values => {
                    handleLogin(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="card p-4" style={{ width: "300px" }}>
                        {/* <h2>Login</h2> */}
                        {loginErrorMessage ? <small className="alert alert-danger d-flex align-items-center" role="alert">{loginErrorMessage}</small> : <></>}

                        <div className="btn btn-outline-dark btn-sm d-flex align-items-center justify-content-center gap-2">
                            <img src="src/assets/google_logo.png" alt="" style={{ height: "30px" }} />
                            Continue with Google
                        </div>
                        <div className="text-center pt-3">or</div>
                        <div className="mb-3 mt-1">
                            <label className="form-label">Email</label>
                            <Field className="form-control" id="exampleInputEmail1" name="email" />
                            {touched.email && errors.email && <div id="emailHelp" className="form-text text-danger">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <Field className="form-control" id="exampleInputPassword1" name="password" type="password" />
                            {touched.password && errors.password && <div id="emailHelp" className="form-text text-danger">{errors.password}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Login</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default LoginForm
