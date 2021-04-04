import { Input, Space } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { getAllSearch } from '../../Slice/productSlice';
import './index.scss';
const Search = () => {
    const history = useHistory();
    const { Search } = Input;
    const inputref = useRef()
    const dispatch = useDispatch()
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery()

    const onSearch = (value) => {
        if(value === ""){
            return
        }
        history.push(`/search?q=${ value }`)
        dispatch(getAllSearch(value))
        inputref.current.handleReset(value)
    }
    useEffect(() => {
        const name =  query.get("q")
        dispatch(getAllSearch(name))
        return () => {
            getAllSearch(name)
        }
    }, [dispatch , query])

    return (
        <div className="search">
            <Space direction="vertical">
                <Search ref={ inputref } type="danger" placeholder="Search....." onSearch={onSearch} enterButton />
            </Space>
        </div>
    )
}

export default Search