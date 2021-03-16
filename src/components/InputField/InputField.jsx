import React from 'react';
import TextField from '@material-ui/core/TextField';
import {FormControl} from '@material-ui/core';
function InputField(props) {
    const { field ,  form , type, label } = props;
    const { errors, touched  }  = form;
    const { name , value} = field;
    const showError = errors[name] && touched[name];
    return (
        <div>
            <FormControl fullWidth style={{ marginBottom : "15px" }}>
                <TextField
                    className= { showError ? "err" : null }
                    fullWidth
                    { ...field }
                    type ={ type }
                    value ={ value }
                    label = { label }
                    variant="outlined" 
                />
            </FormControl>
            { showError && <p className="error">{errors[name]}</p>}
        </div>
    );
}

export default InputField;