import { Formik, Form, Field } from "formik"
import * as yup from 'yup'

const UserSignupForm = () => {
    const userSingupFormValidationSchema = yup.object().shape({
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string().required('Required').min(8, 'At least 8 characters required.'),
        password2: yup.string().required('Required').min(8, 'At least 8 characters required.').oneOf([yup.ref('password')], 'Passwords must match'),
    })

    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    password2: ''
                }}
                validationSchema={userSingupFormValidationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="card p-4" style={{ width: "450px" }}>
                        <h2>Sign Up</h2>

                        <div className="row mt-3">
                            <div className="mb-3 col">
                                <label className="form-label">First Name</label>
                                <Field className="form-control" id="firstName" name="firstName" />
                                {touched.firstName && errors.firstName && <div id="firstName-error" className="form-text text-danger">{errors.firstName}</div>}
                            </div>
                            <div className="mb-3 col">
                                <label className="form-label">Last Name</label>
                                <Field className="form-control" id="lastName" name="lastName" />
                                {touched.lastName && errors.lastName && <div id="lastName-error" className="form-text text-danger">{errors.lastName}</div>}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <Field className="form-control" id="email" name="email" />
                            {touched.email && errors.email && <div id="email-error" className="form-text text-danger">{errors.email}</div>}
                        </div>
                        <div className="row">
                            <div className="mb-3 col">
                                <label className="form-label">Password</label>
                                <Field className="form-control" id="password" name="password" type="password" />
                                {touched.password && errors.password && <div id="password-error" className="form-text text-danger">{errors.password}</div>}
                            </div>
                            <div className="mb-3 col">
                                <label className="form-label">Re-Enter Password</label>
                                <Field className="form-control" id="password2" name="password2" type="password" />
                                {touched.password2 && errors.password2 && <div id="password2-error" className="form-text text-danger">{errors.password2}</div>}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Sign In</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default UserSignupForm
