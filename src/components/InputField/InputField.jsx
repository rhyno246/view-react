import React from 'react';
function InputField(props) {
    const { field ,  form , type, label } = props;
    const { errors, touched  }  = form;
    const { name , value} = field;
    const showError = errors[name] && touched[name];
    return (
        <div>
            <input
                { ...field }
                type ={ type }
                value ={ value }
                label = { label }
                className= { showError ? "err" : null }
            />
            { showError && <p className="error">{errors[name]}</p>}
        </div>
    );
}

export default InputField;