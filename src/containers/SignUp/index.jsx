import React, { useState } from 'react';
import { Formik, Form , FastField  } from 'formik';
import './index.scss'
import * as Yup from 'yup';
import { Button, Card , CircularProgress, Container, FormControl } from '@material-ui/core';
import InputField from '../../components/InputField/InputField';
import { Link, useHistory } from 'react-router-dom';
import checkBoxField from '../../components/InputField/checkBoxField';
import Alert from '@material-ui/lab/Alert';
import { auth } from '../../firebase/firebase'
import { useDispatch } from 'react-redux';
import { setNameAuth } from '../../Slice/authSlice';




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
    const history = useHistory()
    const dispatch = useDispatch()
    const hanleSignUp = async (values , form) => {
        setLoading(true)
        await auth.createUserWithEmailAndPassword(values.email , values.password)
        .then(userCredential => {
            var user = userCredential.user;
            setLoading(false)
            history.push('/')
            dispatch(setNameAuth(values.name))
            user.updateProfile({
                displayName : values.name,
            })
        }).catch(error =>{
            switch (error.code) {
                case 'auth/email-already-in-use':
                    form.resetForm({
                        values : {
                            ...values,
                            email : ""
                        }
                    })
                    break;
                default:
                    break;
            }
            setError(error.message)
            setLoading(false)
        })
    }
    return (
        <div className="sign-up">
            <Container>
                <h1 className="heading-login">Signup</h1>
                { error ? <Alert severity="error" style={{ marginBottom : "15px" }}>{ error }</Alert> : null}
                <Card className="main">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={SignupSchema}
                        onSubmit={(values , form) => hanleSignUp(values , form) }
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