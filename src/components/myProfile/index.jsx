import { Alert, Button, Input } from 'antd';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react'
import { useFileUpload } from "use-file-upload"
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { setNameAuth } from '../../Slice/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss'



const MyInnerForm = (props) => {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom : "15px" }}>
                <Input 
                    defaultValue = { values.name }
                    // value = { values.name } 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    id="name"
                />
                {errors.name && touched.name && (
                    <div className="error">{errors.name}</div>
                )}
            </div>
            <div>
                <Input 
                    defaultValue = { values.email }
                    // value = { values.email }
                    onChange = { handleChange }
                    onBlur = { handleBlur }
                    id="email"
                />
                {errors.email && touched.email && (
                    <div className="error">{errors.email}</div>
                )}
            </div>
            <div style={{ marginTop : "20px" }}>
                <Button type="primary" htmlType="submit" disabled = { errors.email || errors.name }>
                    Update profile
                </Button>
            </div>
        </form>
    );
};
function MyProfile(props) {
    const defaultSrc = "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";
    const [files, selectFiles] = useFileUpload();
    const { currentUser , updateMail } = useAuth()
    const name = currentUser && currentUser.displayName;
    const email = currentUser && currentUser.email;
    const dispatch = useDispatch()
    const [err ,setError] = useState()
    const handleUpload = () => {
        selectFiles({ accept: "image/*" }, ({ name, size, source, file }) => {
            console.log("Files Selected", { name, size, source, file });
        })
    }
    const EnhancedForm = withFormik({
        mapPropsToValues: () => ({ 
            name : name,
            email : email
        }),
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(3, 'Name must be at most 3 characters long')
                .max(10, 'Name must be less than 10 characters')
                .required("Name is required!"), 
            email: Yup.string().email('Invalid Email').required('Email Required'),
        }),
        handleSubmit: (values, { setSubmitting }) => {
            if(values.name !== currentUser.displayName || values.email !== currentUser.email){
                dispatch(setNameAuth(values.name))
                currentUser.updateProfile({
                    displayName : values.name
                })
                updateMail(values.email).then(() =>{
                    toast.success('🦄 your profile success  ', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }).catch(error => {
                    setError(error.message)
                })
                setSubmitting(false);
            }else{
                toast.warn('🦄 Opps !! your profile not change  ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return
            }
        }
    })(MyInnerForm);
    return (
        <div className="main">
            <div className="default">
                <div style={{ marginTop : "20px" , textAlign : "center" }}>
                    <img src={files?.source || defaultSrc} alt="preview"/>
                    <Button
                        type="primary"
                        onClick={handleUpload}
                    >
                        Upload Avatar
                    </Button>
                </div>
            </div>
            <div className="change-profile" style={{ marginTop : "25px" }}>
                { err ? <Alert message={ err } type="error" showIcon style={{ margin : "10px 0px" }}/> : null}
                <ToastContainer/>
                <EnhancedForm/>
            </div>
        </div>
    )
}

export default MyProfile

