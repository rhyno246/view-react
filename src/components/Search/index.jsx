import { Input, Space } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { getAllSearch } from '../../Slice/productSlice';
import './index.scss';
const Search = () => {
    const history = useHistory();
    const { Search } = Input;
    const inputref = useRef()
    const dispatch = useDispatch()
    const reRenderSearchloading = useSelector(state => state.product.reRenderSearchloading)
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
        if(reRenderSearchloading){
            const name =  query.get("q")
            dispatch(getAllSearch(name))
        }
    }, [dispatch , query , reRenderSearchloading])

    return (
        <div className="search">
            <Space direction="vertical">
                <Search ref={ inputref } type="danger" placeholder="Search....." onSearch={onSearch} enterButton />
            </Space>
        </div>
    )
}

export default Search