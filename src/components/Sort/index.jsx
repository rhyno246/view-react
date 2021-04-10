import { Select } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';
import { filterProduct, sortProduct } from '../../Slice/productSlice';

function Sort() {
    const { Option } = Select;
    const dispatch = useDispatch()
    const handleChange = (val , props) => {
        const item = { 
            order : props.item,
            name : props.val
        }
        dispatch(sortProduct(item))
    }
    const handleChangeFilter = (val) => {
        dispatch(filterProduct(val))
    }
    return (
        <div className="sort-product">
            <div className="container">
                <div className="group-sort">
                    <Select size="large" 
                        onChange={handleChange} 
                        defaultValue="Sort by"
                        style={{ width: 200 , marginBottom : "30px" , marginRight : "10px" }}
                    >   
                        <Option key={1} item="asc" val="title">Name (asc)</Option>
                        <Option key={2} item="desc" val="title">Name (desc)</Option>
                        <Option key={3} item="asc" val="price">Price (asc)</Option>
                        <Option key={4} item="desc" val="price">Price (desc)</Option>
                    </Select> 

                    <Select size="large" 
                        onChange={handleChangeFilter} 
                        defaultValue="Filter by"
                        style={{ width: 200 , marginBottom : "30px" }}
                    >   
                        <Option value="Puma">Puma</Option>
                        <Option value="Addidas">Addidas</Option>
                        <Option value="Yeezy">Yeezy</Option>
                        <Option value="Nike">Nike</Option>
                    </Select> 
                </div>
            </div>
        </div>

    )
}

export default Sort

