import React from 'react'
import { Formik, Form , FastField } from 'formik';
import './index.scss'
import * as Yup from 'yup';
import InputField from '../../components/InputField/InputField';
import { Button } from 'antd';


const initialValues ={ 
    password : '',
    newpassword: '',
    cfmnewpassword : '',
}

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password must be at most 6 characters long')
        .max(50, 'Name must be less than 50 characters')
        .required('Passwords Required'),
    newpassword: Yup.string()
        .min(6, 'Password must be at most 6 characters long')
        .max(50, 'Name must be less than 50 characters')
        .required('Passwords Required'),
    cfmnewpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Comfirm Passwords Required'),
});
function ChangePass() {
    return (
        <div className="changepass">
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
            >
                <Form>
                    <FastField name="password" component={ InputField } type="password" label="Old Password"/>
                    <FastField name="newpassword" component={ InputField } type="password" label="New Password"/>
                    <FastField name="cfmnewpassword" component={ InputField } type="password" label="Confirm Password"/>
                    <div style={{ marginTop : "20px" }}>
                        <Button type="primary" htmlType="submit">
                            Update password
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ChangePass
