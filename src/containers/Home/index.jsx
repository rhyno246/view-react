import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../components/Banner';
import Loading from '../../components/Loading';
import ProductItem from '../../components/ProductItem';
import ShoesSex from '../../components/ShoesSex';
import { getAllOtherBrand, getAllProduct, getAllShoelace } from '../../Slice/productSlice';
import Title from '../../components/Title/index'
import './index.scss';
import SaleProduct from '../../components/SaleProduct';
const Home = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.product)
    const isLoading = useSelector(state => state.product.loading)
    const reRenderloading = useSelector(state => state.product.reRenderloading)
    const otherbrand = useSelector(state => state.product.otherbrand)
    const shoeslace = useSelector(state => state.product.shoeslace)
    useEffect(() => {
        if(reRenderloading){
            dispatch(getAllProduct())
            dispatch(getAllOtherBrand())
            dispatch(getAllShoelace())
        }
    },[dispatch , reRenderloading])   
    const allproduct = productList.concat(otherbrand, shoeslace)
    return (
        <>
            <Banner/>
            <ShoesSex/>
            <SaleProduct allproduct = { allproduct }/>
            <Title title ="All Shoes"/>
            { isLoading ? <Loading/> : null }
            <div className="home">
               <div className="container">
                    <Row gutter={ 24 }>
                        { productList.map(item => (
                            <Col className="gutter-row" xs={ 24 } sm={ 12 } xl={6} key={ item.id } style={{ marginBottom : "25px" }}>
                                <ProductItem 
                                    id={ item.id } 
                                    title ={ item.title }
                                    price ={ item.price }
                                    image={ item.image }
                                    size = { item.size }
                                    quantity = { item.quantity }
                                    sale = { item.sale }
                                    sizeChose = { item.size[0] }
                                    status = { item.status }
                                />
                            </Col>
                        )) }
                        
                    </Row>
               </div>
            </div>
        </>
    )
}

export default Home