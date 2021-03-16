import React, { useState } from 'react';
import { Formik, Form , FastField  } from 'formik';
import './index.scss'
import * as Yup from 'yup';
import { Button, Card , CircularProgress, Container, FormControl } from '@material-ui/core';
import InputField from '../../components/InputField/InputField';
import { Link } from 'react-router-dom';
import checkBoxField from '../../components/InputField/checkBoxField';
import firebase from "../../firebase/firebase";


const initialValues ={ 
    name: '',
    password: '',
    email: '',
    cfmpassword : '',
    acceptTerms : false
}

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name must be at most 3 characters long')
        .max(10, 'Name must be less than 10 characters')
        .required('Name Required'),
    password: Yup.string()
        .min(6, 'Password must be at most 6 characters long')
        .max(50, 'Name must be less than 50 characters')
        .required('Passwords Required'),
    cfmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Comfirm Passwords Required'),
    email: Yup.string().email('Invalid Email').required('Email Required'),
    acceptTerms: Yup.boolean().oneOf([true], 'Accept Terms & Conditions is required')
});



const SignUp = () => {
    const [error , setError] = useState("")
    const [loading , setLoading] = useState(false)
    const hanleSignUp = (values , resetForm) => {
        setLoading(true)
        setTimeout(() => {
            firebase.auth().createUserWithEmailAndPassword(values.email , values.password)
            .then(userCredential => {
                var user = userCredential.user
                setLoading(false)
                user.updateProfile({
                    displayName : values.name
                })
            }).catch(error => {
                if(error){
                    resetForm.resetForm()
                    setError(error.message)
                    setLoading(false)
                    return
                }
            })
        }, 500);
    }
    return (
        <div className="sign-up">
            <Container>
                <h1 className="heading-login">Signup</h1>
                { error ? <p className="error-box">{ error }</p> : null}
                <Card className="main">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={SignupSchema}
                        onSubmit={(values , dataResetForm) => hanleSignUp(values , dataResetForm) }
                    >   
                        <Form>
                            <FastField name="name" component={ InputField } type="text" label="Name"/>
                            <FastField name="email" component={ InputField } type="text" label="Email"/>
                            <FastField name="password" component={ InputField } type="password" label="Password"/>
                            <FastField name="cfmpassword" component={ InputField } type="password" label="Confirm Password"/>
                            <FastField name="acceptTerms" component ={ checkBoxField } type="checkbox" label="You must agree to continue!"/>
                            <FormControl fullWidth>
                                <Button variant="outlined" color="primary" className="btn-login" type="submit" disabled = { loading }>
                                    { loading ?  <CircularProgress size={25} className="position"/> : "Sign Up"}
                                </Button>
                                <Link to="/login" className="login-link">Already have an account? Login.</Link>
                            </FormControl>
                        </Form>
                    </Formik>
                </Card>
            </Container>
        </div>
    )
};


 export default SignUp