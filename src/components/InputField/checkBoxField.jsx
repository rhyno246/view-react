import { Checkbox, FormControl, FormControlLabel } from '@material-ui/core';
import React from 'react';


function checkBoxField(props) {
    const { field ,  form , type, label } = props;
    const { errors, touched }  = form;
    const { name , value , onChange, onBlur } = field;
    const showError = errors[name] && touched[name];
    return (
        <div className="checkbox">
            <FormControl>
                <FormControlLabel 
                    className="check"
                    control={
                        <Checkbox                  
                            color="primary"
                            type={ type }
                            value = { value }
                            name = { name }
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    }
                    label={ label }
                />
            </FormControl>
            { showError && <p className="error">{errors[name]}</p>}
        </div>
    );
}

export default checkBoxField;