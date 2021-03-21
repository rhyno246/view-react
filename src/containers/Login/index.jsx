import React, { useState } from 'react';
import { Formik, Form , FastField } from 'formik';
import './index.scss'
import * as Yup from 'yup';
import InputField from '../../components/InputField/InputField';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase/firebase'
import { Alert, Button } from 'antd';
import { setIsAuth } from '../../Slice/authSlice';
import { useDispatch } from 'react-redux';

const initialValues ={ 
    password: '',
    email: '',
}
const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email Required'),
    password: Yup.string()
        .min(6, 'Password must be at most 6 characters long')
        .max(50, 'Name must be less than 50 characters')
        .required('Passwords Required'),
});
const Login = () => {

    const history = useHistory()
    const [error , setError] = useState("")
    const [loading , setLoaing] = useState(false)
    const dispatch = useDispatch()
    const hanleLogin = (values , form) => {
        setLoaing(true)
        auth.signInWithEmailAndPassword(values.email , values.password).then(userCredential =>{
            var user = userCredential.user
            setLoaing(false)
            dispatch(setIsAuth(true))
            if(user){
                history.push('/')
            }
        }).catch(error => {
            if(error){
                form.resetForm()
                setLoaing(false)
                setError(error.message)
            }
        })
    }
    return (
        <div className="login">
            <div>
                <h2 className="heading-login">Login</h2>
                { error ? <Alert message={ error } type="error" showIcon /> : null}
                <div className="main">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LoginSchema}
                        onSubmit={(values , form) => hanleLogin(values , form) }
                    >
                        <Form>
                            <FastField name="email" component={ InputField } type="text" label="Email"/>
                            <FastField name="password" component={ InputField } type="password" label="Password"/>
                            <div style={{ marginTop : "20px" }}>
                                <Button type="primary" htmlType="submit" loading={ loading }>
                                    { loading ?  "loadding" : "Login"}
                                </Button>
                                <Link to="/sign-up" className="login-link">Don't have an account? Sign up.</Link>
                            </div>
                        </Form>
                        
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Login;