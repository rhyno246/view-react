import React from 'react';
function checkBoxField(props) {
    const { field ,  form , type, label } = props;
    const { errors, touched }  = form;
    const { name , value , onChange, onBlur } = field;
    const showError = errors[name] && touched[name];
    return (
        <div className="checkbox">
            <input 
                type={ type }
                value = { value }
                name = { name }
                onChange={onChange}
                onBlur={onBlur}
            />
            <label htmlFor= { name }>{ label }</label>
            { showError && <p className="error">{errors[name]}</p>}
        </div>
    );
}

export default checkBoxField;