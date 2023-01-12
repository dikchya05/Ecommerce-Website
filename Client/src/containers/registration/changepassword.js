import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";

const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const PasswordSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Required"),
    newPassword: Yup.string()
        .required("Required")
        .min(6)
        .matches(passwordRule, { message: "Please create a stronger password" }),
    confirmPassword: Yup.string()
        .min(6)
        .when("newPassword", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("newPassword")],
                "password didn't match")
        })
        .required('Required'),
});

        
const ChangePassword = () => {
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const { email } = useSelector((state) => state.user);
    console.log("email is", email)

    const changePassword = async (values) => {
        values.email = email;
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        };

        const response = await fetch("http://localhost:4000/changepassword", requestOptions);
        const data = await response.json();
        if (data.msg) {
            setMessage(data.msg)

        } else {
            setErrorMessage(data.errMsg)

        }
    };

    return (
        <section>
                <Navigation/>
            <div className="form">
                <Formik
                    initialValues={{
                        currentPassword: "",
                        newPassword: "",
                        confirmPassword: "",
                    }}
                    validationSchema={PasswordSchema}
                    onSubmit={(values, { resetForm }) => {

                        setErrorMessage('')
                        setMessage('')
                        changePassword(values);
                        resetForm();
                    }}
                >
                    {({ errors, touched, values, handleChange, handleBlur, handleSubmit, }) => (
                        <Form onSubmit={handleSubmit}>
                            <Field name="currentPassword" placeholder="Current Password" value={values.currentPassword}
                                onChange={handleChange} onBlur={handleBlur} />
                            {errors.currentPassword && touched.currentPassword ? (<div className="error">{errors.currentPassword}</div>) : null}

                            <Field name="newPassword" placeholder="New Password" value={values.newPassword}
                                onChange={handleChange} onBlur={handleBlur} />
                            {errors.newPassword && touched.newPassword ? (<div className="error">{errors.newPassword}</div>) : null}

                            <Field name="confirmPassword" placeholder="Confirm Password" value={values.confirmPassword}
                                onChange={handleChange} onBlur={handleBlur} />
                            {errors.confirmPassword && touched.confirmPassword ? (<div className="error">{errors.confirmPassword}</div>) : null}
                            <button type="submit">Change Password</button><br />
                            <p>{message} {errorMessage}</p>

                        </Form>
                    )}
                </Formik>
            </div>

        </section>
    );
};

export default ChangePassword;