import React from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from 'yup'
class App extends React.Component {
	render() { 
        
		return (
			<div className="userDetails">
				<div className="row">
					<div className="col-lg-12">
                        <Formik
                                initialValues={{ name: "", email: "", dob: "", password: "" }}
                                validationSchema={LoginSchema}
                                onSubmit={(values) => {
                                    console.log(values)
                                    alert("Form  Submitted...");
                                }}
                        >
							{(props) => (
								<div>
									{console.log(props)}
									<div className="row mb-5">
										<div className="col-lg-12 text-center">
											<h1 className="mt-5">Login Form</h1>
										</div>
									</div>
									<Form>
										<div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <Field
                                        type="name"
                                        name="name"
                                        placeholder="Enter name"
                                        autocomplete="off"
                                        className={`mt-1 form-control ${props.touched.name && props.errors.name ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage
                                        component="div"
                                        name="name"
                                        className="invalid-feedback"
                                        />
                                        </div>
										<div className="form-group">
                                        <label htmlFor="email" className="mt-2">Email</label>
                                        <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        autocomplete="off"
                                        className={` ${props.touched.email && props.errors.email ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="invalid-feedback"
                                        />
										</div>
                                        <div className="form-group">
                                            <label htmlFor="dob">DOB</label>
                                            <Field
                                            name="dob"
                                            type="dob"
                                            autocomplete="off"
                                            className={` ${props.touched.dob && props.errors.dob ? "is-invalid" : ""}`}
                                            />
                                            <ErrorMessage
                                                component='div'
                                                name="dob"
                                                className="error"
                                            />
                                        </div>
										<div className="form-group">
										<label htmlFor="password" className="mt-3">Password</label>
										<Field
											type="password"
											name="password"
											placeholder="Enter password"
                                            className={`mt-3 form-control ${props.touched.password && props.errors.password ? "is-invalid" : ""}`}
										/>
                                        <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="invalid-feedback"
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
}

const LoginSchema = Yup.object().shape({
    name:Yup.string().required("name is required")
    .min(5,"Name can be minimum 5 character")
    .max(10,"Name has maximum 10 character"),
	email: Yup.string()

		// Format Validation
		.email("Invalid email address format")

		// Required Field Validation
		.required("Email is required"),
    
	password: Yup.string()

		//Minimum Character Validation
		.min(5, "Password must be 3 characters at minimum")
        
		.required("Password is required"),
        dob:Yup.date().required("DOB is required")
        .min(new Date("2000/01/01"),"DOB must be after 2000")
        .max(new Date("2023/12/31"),"DOB is before 2024")

});

const isSubmitting =()=>{isSubmitting ? 
    (<h1>Login Page</h1>) : (<h1>Confirmation of Login</h1>)
}
export default App;
