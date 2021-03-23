import React, { useState } from 'react'
import { Formik, Form , FastField } from 'formik';
import './index.scss'
import * as Yup from 'yup';
import InputField from '../../components/InputField/InputField';
import { Alert, Button } from 'antd';
import { useAuth } from '../../contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';


const initialValues ={ 
    newpassword: '',
    cfmnewpassword : '',
}

const SignupSchema = Yup.object().shape({
    newpassword: Yup.string()
        .min(6, 'Password must be at most 6 characters long')
        .max(50, 'Name must be less than 50 characters')
        .required('Passwords Required'),
    cfmnewpassword: Yup.string().oneOf([Yup.ref('newpassword'), null], 'Passwords do not match').required('Comfirm Passwords Required'),
});
function ChangePass() {
    const { currentUser } = useAuth()
    const [loading , setLoading] = useState(false)
    const [err, setErr] = useState("")
    const changePassword = async (values, form) => {
        setLoading(true)
        currentUser.updatePassword(values.newpassword).then(() => {
            form.resetForm()
            setLoading(false)
            toast.success('🦄 Password update success  ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch(error => {
            form.resetForm()
            setLoading(false)
            setErr(error.message)
        })
    }


    return (
        <div className="changepass">
            <ToastContainer/>
            { err ? <Alert message={ err } type="error" showIcon style={{ margin : "10px 0px" }}/> : null}
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit ={ (values , form ) => changePassword(values,form) }
            >
                <Form>
                    <FastField name="newpassword" component={ InputField } type="password" label="New Password"/>
                    <FastField name="cfmnewpassword" component={ InputField } type="password" label="Confirm Password"/>
                    <div style={{ marginTop : "20px" }}>
                        <Button type="primary" htmlType="submit" loading={ loading }>
                            { loading ? "Loading" : "Update password" }
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ChangePass
