import React, { useEffect } from 'react'
import { Select  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry, setAddress } from '../../Slice/cartSlice';
function SelectField(props) {
    const { Option } = Select;
    const { field ,  form , placeholder } = props;
    const { errors, touched }  = form;
    const { name } = field;
    const showError = errors[name] && touched[name];
    const address = useSelector(state => state.cart.address)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountry())
    } , [dispatch])
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
                style={{ width: "100%" , margin: "10px 0 10px 0" }}
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
                
                { address.map(item => (
                    <Option value= { item.country } key={ item.id }>{ item.country }</Option>
                )) }
            </Select>
            { showError && <p className="error">{errors[name]}</p>}
        </div>
    )
}

export default SelectField
