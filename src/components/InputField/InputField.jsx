import { Input } from 'antd';
import React from 'react';
function InputField(props) {
    const { field ,  form , type, label } = props;
    const { errors, touched  }  = form;
    const { name , value} = field;
    const showError = errors[name] && touched[name];
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