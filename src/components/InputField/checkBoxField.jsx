import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
function checkBoxField(props) {
    const { field ,  form , type, label } = props;
    const { errors, touched }  = form;
    const { name  , onChange, onBlur } = field;
    const showError = errors[name] && touched[name];
    return (
        <div className="checkbox">
            <Checkbox type={ type } name = { name } onBlur={onBlur} onChange={onChange}>
                { label }
            </Checkbox>
            { showError && <p className="error">{errors[name]}</p>}
        </div>
    );
}

export default checkBoxField;