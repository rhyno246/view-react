import { Input, Space } from 'antd';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { SearchItem } from '../../Slice/productSlice';
import './index.scss';
const Search = () => {
    const history = useHistory();
    const { Search } = Input;
    const inputref = useRef()
    const dispatch = useDispatch()
    const onSearch = (value) => {
        if(value === ""){
            return
        }
        history.push('/search')
        dispatch(SearchItem(value))
        inputref.current.handleReset(value)
    }
    return (
        <div className="search">
            <Space direction="vertical">
                <Search ref={ inputref } type="danger" placeholder="Search....." onSearch={onSearch} enterButton />
            </Space>
        </div>
    )
}

export default Search