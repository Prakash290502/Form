import React from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from 'yup'
import { connect } from "react-redux";
import { saveFormData } from "D:/Task/FormValidation/form/src/features/actions"
import {   Routes,Route, Link, Outlet} from 'react-router-dom'
import Display from "D:/Task/FormValidation/form/src/Display";

class App extends React.Component {
    render() { 
      const { formSubmitted, saveFormData, formData } = this.props;
      
      return (
        <div className="userDetails">
          
          
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Formik
                    initialValues={{ name: "", email: "", dob: "", password: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      console.log(values);
                      saveFormData(values);
                      setTimeout(() => {
                        alert("Form Submitted...");
                        setSubmitting(false);
                      }, 1000);
                    }}
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
                                    <label htmlFor="name">Name</label>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Enter name"
                                        autoComplete="off"
                                        className={` ${props.touched.name && props.errors.name ? "is-invalid" : ""}`}
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
                                        autoComplete="off"
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
                                            type="date"
                                            autoComplete="off"
                                            placeholder="yyyy mm dd"
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
                                            className={` ${props.touched.password && props.errors.password ? "is-invalid" : ""}`}
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
									>Submit
									</button>
									</Form>
                                    </div>
                  )}
                </Formik>
                {formSubmitted ? (
                  <h1>submitted Successfully</h1>
                ) : (
                  <h1>Fill form</h1>
                )}
              </>
              
            }
          />
          <Route path="/formData" element={<Display formData={formData} />} />
        </Routes>
        <Link to='/formData'>Display FORM</Link>
        <Outlet /> 
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  formSubmitted: state.formSubmitted,
  formData: state.formData,
});

const mapDispatchToProps = (dispatch) => ({
  saveFormData: (data) => dispatch(saveFormData(data)),
});

const LoginSchema = Yup.object().shape({
    name:Yup.string().required("name is required")
    .min(5,"Name can be minimum 5 character")
    .max(10,"Name has maximum 10 character"),
	email: Yup.string()

		.email("Invalid email address format")
		.required("Email is required"),
    
	password: Yup.string()
		.min(5, "Password must be 5 characters at minimum")
        .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$","Enter Valid format ")
		.required("Password is required"),
        dob:Yup.date().required("DOB is required")
        .min(new Date("2000/01/01"),"DOB must be after 2000")
        .max(new Date("2023/12/31"),"DOB is before 2024")

});



  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
