import React from 'react'
import { Select  } from 'antd';
import { useDispatch } from 'react-redux';
import { setAddress } from '../../Slice/cartSlice';
function SelectField(props) {
    const { Option } = Select;
    const { field ,  form , options , placeholder } = props;
    const { errors, touched }  = form;
    const { name } = field;
    const showError = errors[name] && touched[name];
    const dispatch = useDispatch()

    const handleChangeSelect = (val) => {
        const changeEvent = {
            target : {name : name,value : val}
        }
        field.onChange(changeEvent)
        dispatch(setAddress(val))
    }
    return (
        <div>
            <Select
                showSearch
                style={{ width: "100%" , margin: "10px 0 0 0" }}
                placeholder={ placeholder }
                onChange={ handleChangeSelect }
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
            >
                
                { options.map(item => (
                    <Option value= { item.country } key={ item.id }>{ item.country }</Option>
                )) }
            </Select>
            { showError && <p className="error">{errors[name]}</p>}
        </div>
    )
}

export default SelectField
