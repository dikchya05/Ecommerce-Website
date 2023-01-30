import React, {useState} from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {message } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {setUserDetails} from "../../reducers/userSlice"
import ButtonClick from "../../components/button";



const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

   // const [message, setMessage] = useState('')

    const loginUser = async (values, resetForm) => {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch('http://localhost:4000/login', requestOptions);
        const data = await response.json()

        if (data.msg === 'login success') {
            dispatch(setUserDetails(data.userDetails))
            // navigate('/')
            message.success(data.msg)
        }else{
            message.error(data.msg)

        }
    }

    return (
        <div className='App'>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={loginSchema}
                onSubmit={(values, { resetForm }) => {
                    loginUser(values)
                    resetForm()
                }}
            >
                {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                    <div className="App">
                    <div className='form'>
                        <Form onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <Field name="email" type="email" placeholder="Enter Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                            <Field name="password" type="password" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}

                            <ButtonClick  itemname = 'login' width='100px' marginRight='170px'/>
                            {/* <p style={{color:'black'}}>{message} </p> */}
                            <p style={{ marginTop: '10px' }}>Dont have an account? <Link to="/register">Signup</Link> here</p>
                        </Form>
                    </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}
export default Login