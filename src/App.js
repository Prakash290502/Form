import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function App() {
    const emailRef = useRef(null); // Example of using useRef in a functional component

    const handleSubmit = (values) => {
        console.log(values);
        alert("Form is validated! Submitting the form...");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                    >
                        {(props) => (
                            <div>
                                <div className="row mb-5">
                                    <div className="col-lg-12 text-center">
                                        <h1 className="mt-5">Login Form</h1>
                                    </div>
                                </div>
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            autoComplete="off"
                                            innerRef={emailRef} // Assign the ref to an input field
                                            className={`mt-2 form-control ${props.touched.email && props.errors.email ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="mt-3">
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block mt-4"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required")
});

export default App;

