import React, { useState } from 'react';
import { Formik, Form , FastField } from 'formik';
import './index.scss'
import * as Yup from 'yup';
import { Button, Card, CircularProgress, Container, FormControl } from '@material-ui/core';
import InputField from '../../components/InputField/InputField';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase/firebase'
import Alert from '@material-ui/lab/Alert';

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

    const hanleLogin = (values , form) => {
        setLoaing(true)
        auth.signInWithEmailAndPassword(values.email , values.password).then(userCredential =>{
            var user = userCredential.user
            setLoaing(false)
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
            <Container>
                <h2 className="heading-login">Login</h2>
                { error ?  <Alert severity="error" style={{ marginBottom : "15px" }}>{ error }</Alert> : null}
                <Card className="main">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LoginSchema}
                        onSubmit={(values , form) => hanleLogin(values , form) }
                    >
                        <Form>
                            <FastField name="email" component={ InputField } type="text" label="Email"/>
                            <FastField name="password" component={ InputField } type="password" label="Password"/>
                            <FormControl fullWidth>
                                <Button variant="outlined" color="primary" className="btn-login" type="submit" disabled={ loading }>
                                    { loading ? <CircularProgress size={25} className="position"/> : "Login" }
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