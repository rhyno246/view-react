import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import banner from '../../img_local/banner2.jpg'
import { getShoesPage, loadMoreShoes } from '../../Slice/productSlice'
import Title from '../../components/Title/index'
import './index.scss'
import Loading from '../../components/Loading'
import { debounce } from '../../untils/helper'


function Shoes() {
    const shoesScroll = useSelector(state => state.product.shoesScroll)
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.product.loading)
    const loadMore = useSelector(state => state.product.loadMore)
    const reRenderloadingShoes = useSelector(state => state.product.reRenderloadingShoes)
    let [pager , setPage] = useState(1)




    useEffect(() => {
        if(reRenderloadingShoes){
            dispatch(getShoesPage({
                page :pager,
                limit : 8
            }))
        }
        const handleScroll = debounce(() => {
            const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
            if (scrollTop + window.innerHeight + 100 >= scrollHeight){
                setPage(++pager)
                console.log(pager);
                dispatch(loadMoreShoes({
                    page : pager,
                    limit : 8
                }))
            }
        },800);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[dispatch, reRenderloadingShoes, pager])  

    
    
   


    return (
        <>
            { isLoading ? <Loading/> : <div className="shoes">
                <div className="container">
                    <img src={ banner } alt="" className="banner-img img-res"/>
                    <Title title ="Shoes"/> 
                    <Row gutter={ 24 }>
                        { shoesScroll.map(item => (
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
                    { loadMore ? <div className="loading">Loading...............</div> : null}
                </div>
            </div> } 
        </>
    )
}
export default Shoes

