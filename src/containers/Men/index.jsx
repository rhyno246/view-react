import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import { getProductMen } from '../../Slice/productSlice'
import banner from "../../img_local/banner-men.jpg"
import Title from '../../components/Title/index'
import './index.scss'

function Men() {
    const dispatch = useDispatch()
    const listMen = useSelector(state => state.product.men)
    const reRenderMenloading = useSelector(state => state.product.reRenderMenloading)
    useEffect(() => {
        if(reRenderMenloading){
            dispatch(getProductMen("Men"))
        }
    }, [dispatch, reRenderMenloading])

    return (
        <>  
            <div className="men">
                <div className="container">
                    <img src={ banner } alt="" className="banner-img img-res"/>
                    <Title title="Men Shoes"/>
                    <Row gutter={ 24 }>
                        { listMen.map(item => (
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
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Men

