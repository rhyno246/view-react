import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import ProductItem from '../../components/ProductItem';
import banner from "../../img_local/banner4.jpg"
import { getAllOtherBrand } from '../../Slice/productSlice';
import Title from '../../components/Title/index'
import './index.scss'

const OtherBrands = () => {
    const isLoading = useSelector(state => state.product.loading)
    const  reRenderOtherBrandloading = useSelector(state => state.product.reRenderOtherBrandloading)
    const otherbrandList = useSelector(state => state.product.otherbrand)
    const dispatch = useDispatch()
    useEffect(() => {
        if(reRenderOtherBrandloading){
            dispatch(getAllOtherBrand())
        }
    } , [reRenderOtherBrandloading,dispatch])

    return (
        <>
            <div className="other-brand">
                <div className="container">
                    <img src={ banner } alt="" className="banner-img img-res"/>
                    <Title title="other brand"/>
                    { isLoading ? <Loading/> : <Row gutter={ 24 }>
                        { otherbrandList.map(item => (
                            <Col className="gutter-row" xs={ 24 } sm={ 12 } xl={6} key={ item.id } style={{ marginBottom : "25px" }}>
                                <ProductItem 
                                    id={ item.id } 
                                    title ={ item.title }
                                    price ={ item.price }
                                    image={ item.image }
                                    quantity = { item.quantity }
                                    sale = { item.sale }
                                    size = { null }
                                    status = { item.status }
                                />
                            </Col>
                            )) }
                    </Row> }
                </div> 
            </div>
        </>
    );
}

export default OtherBrands;