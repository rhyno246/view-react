import React from 'react';
import { Formik, Form , FastField } from 'formik';
import './index.scss'
import * as Yup from 'yup';
import { Button, Card, Container, FormControl } from '@material-ui/core';
import InputField from '../../components/InputField/InputField';
import { Link } from 'react-router-dom';

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

const hanleLogin = (values) => {
    console.log(values);
}

const Login = () => {
    return (
        <div className="login">
            <Container>
                <h2 className="heading-login">Login</h2>
                <Card className="main">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LoginSchema}
                        onSubmit={values => hanleLogin(values) }
                    >
                        <Form>
                            <FastField name="email" component={ InputField } type="text" label="Email"/>
                            <FastField name="password" component={ InputField } type="text" label="Password"/>
                            <FormControl fullWidth>
                                <Button variant="contained" color="primary" className="btn-login" type="submit">
                                    Login
                                </Button>
                                <Link to="/sign-up" className="login-link">Don't have an account? Sign up.</Link>
                            </FormControl>
                        </Form>
                        
                    </Formik>
                </Card>
            </Container>
        </div>
    );
}

export default Login;