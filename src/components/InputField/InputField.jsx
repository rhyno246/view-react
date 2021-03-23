import { Input } from 'antd';
import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setFormChangePass } from '../../Slice/authSlice';
function InputField(props) {
    const { field ,  form , type, label } = props;
    const { errors, touched  }  = form;
    const { name , value} = field;
    const showError = errors[name] && touched[name];
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(setFormChangePass(props))
    // }, [dispatch , props])
    return (
        <div className="feild" style={{ marginBottom : "15px" }}>
            <Input 
                style={{ padding :"10px 10px", fontSize : "15px" }}
                placeholder={ label }
                { ...field }
                type ={ type }
                value ={ value }
                className= { showError ? "err" : null }
            />
            { showError && <p className="error">{errors[name]}</p>}
        </div>
    );
}

export default InputField;