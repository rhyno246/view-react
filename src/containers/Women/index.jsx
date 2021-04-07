import React, { useEffect } from 'react';
import banner from "../../img_local/banner-women.jpg"
import Title from '../../components/Title/index'
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWomen } from '../../Slice/productSlice';
import Loading from '../../components/Loading';
import ProductItem from '../../components/ProductItem';
import { Col, Row } from 'antd';
function Women() {
    const dispatch = useDispatch()
    const listWomen = useSelector(state => state.product.women)
    const isLoading = useSelector(state => state.product.loading)
    const reRenderWomenloading = useSelector(state => state.product.reRenderWomenloading)
    useEffect(() => {
        if(reRenderWomenloading){
            dispatch(getProductWomen("Women"))
        }
    }, [dispatch, reRenderWomenloading])

    return (
        <div className="women">
            <div className="container">
                <img src={ banner } alt="" className="banner-img img-res"/>
                <Title title="Women Shoes"/>
                { isLoading ? <Loading /> : <Row gutter={ 24 }>
                    { listWomen.map(item => (
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
                                sex = { item.sex }
                            />
                        </Col>
                        )) }
                </Row> }
            </div>
        </div>
    );
}

export default Women;