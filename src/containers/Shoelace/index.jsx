import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import ProductItem from '../../components/ProductItem'
import banner from "../../img_local/banner5.jpg"
import { getAllShoelace } from '../../Slice/productSlice'
import Title from '../../components/Title/index'
import './index.scss'
function Shoeslace() {

    const reRenderShoelaceloading = useSelector(state => state.product.reRenderShoelaceloading)
    const isLoading = useSelector(state => state.product.loading)
    const shoeslaceList = useSelector(state => state.product.shoeslace)
    const dispatch = useDispatch()
    useEffect(() => {
        if(reRenderShoelaceloading){
            dispatch(getAllShoelace())
        }
    } , [reRenderShoelaceloading , dispatch])

    return (
        <div className="shoes-lace"> 
            <div className="container">
                <img src={ banner }  alt="" className="banner-img img-res"/>
                <Title title="Shoes Lace"/>
                { isLoading ? <Loading/> : <Row gutter={ 24 }>
                    { shoeslaceList.map(item => (
                        <Col className="gutter-row" xs={ 24 } sm={ 12 } xl={6} key={ item.id } style={{ marginBottom : "25px" }}>
                            <ProductItem 
                                id={ item.id } 
                                title ={ item.title }
                                price ={ item.price }
                                image={ item.image }
                                quantity = { item.quantity }
                                sale = { item.sale }
                                size = { item.size }
                                status = { item.status }
                            />
                        </Col>
                        )) }
                </Row> }
            </div>
        </div>
    )
}

export default Shoeslace

