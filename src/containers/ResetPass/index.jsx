import React, { useState } from 'react'
import './index.scss'
import * as Yup from 'yup'
import { Formik, Form , FastField } from 'formik'
import InputField from '../../components/InputField/InputField'
import { Alert, Button } from 'antd'
import { auth } from '../../firebase/firebase'

const initialValues ={ 
    email: '',
}
const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email Required'),
});


function ResetPass() {
    const [loading , setLoading] = useState(false)
    const [err ,setErr] = useState("")
    const [success , setSuccess] = useState("")
    const hanleReset = (values , form) => {
        console.log(values,form);
        setLoading(true)
        auth.sendPasswordResetEmail(values.email).then(() =>{
            setLoading(false)
            setSuccess("Reset password sent to email success !!!")
            setTimeout(() => {
                setSuccess("")
            }, 1100);
        }).catch(error => {
            setErr(error.message)
            setTimeout(() => {
                setErr("")
            }, 1100);
            form.resetForm()
            setLoading(false)
        })
    }

    return (
        <div className="forgotPass">
            <div className="container">
                <h1 className="heading-login">Reset Password</h1>
                { err ? <Alert message={ err } type="error" showIcon style={{ margin : "0 10px" }}> { err }</Alert> : null }
                { success ? <Alert message={ success } type="success" showIcon style={{ margin : "0 10px" }}> { success }</Alert> : null }
                <div className="main">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LoginSchema}
                        onSubmit={(values , form) => hanleReset(values , form) }
                    >
                        <Form>
                            <FastField name="email" component={ InputField } type="text" label="Enter your email"/>
                            <div style={{ marginTop : "20px" }}>
                                <Button type="primary" htmlType="submit" loading={ loading } style={{ width : "100%" , marginBottom : "10px" }}>
                                    { loading ? "loading" : "Reset Password" }
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ResetPass
