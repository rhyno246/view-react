import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArrowSlide from '../../components/ArrowSlide';
import Loading from '../../components/Loading';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { AddToCart } from '../../Slice/cartSlice';
import { Button } from 'antd';
import Slider from 'react-slick';
import './index.scss'
import { getDetailShoelace } from '../../Slice/productSlice';
function DetailShoeLace(props) {
    const param = useParams()
    const id = param.id;
    const dispatch = useDispatch()
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [ salePrice , setSalePrice ] = useState("")
    const listShoeslace = useSelector(state => state.product.detailshoeslace)
    const [sizeChange , setSizeChange] = useState(null)
    const loading = useSelector(state => state.product.loading)
    const prodId = listShoeslace.id
    const title = listShoeslace.title
    const imageArr = listShoeslace.image
    const quantity = listShoeslace.quantity
    const size = listShoeslace.size
    const price = listShoeslace.price
    const sale = listShoeslace.sale
    let desc = listShoeslace && listShoeslace.description
    useEffect(() => {
        dispatch(getDetailShoelace(id))
    }, [ dispatch ,  id])
    useEffect(() => {
        setSalePrice(price - sale * price)
    },[price , sale])
    const handleAddToCart = () => {
        if(sale){
            dispatch(AddToCart({
                id : prodId,
                title : title,
                price : salePrice,
                image : imageArr,
                stock : quantity,
                shoeslace : true
            }))
        }
        else{
            dispatch(AddToCart({
                id : prodId,
                title : title,
                price : price,
                image : imageArr,
                stock : quantity,
                shoeslace : true
            }))
        }
    }
    return (
        <>
        { loading ? <Loading/> : <div className="product-detail">
            <div className="container">
                <div className="main" style={{ maxWidth : "100%" }}>
                    <div className="img">
                        <Slider 
                            asNavFor={nav2} 
                            ref={c => setNav1(c)} 
                            prevArrow = {<ArrowSlide to="prev" /> }
                            nextArrow = {<ArrowSlide to="next" />}
                        >
                            { imageArr && imageArr.map((item , index) =>(
                                <div className="slide-img" key={ index }>
                                    <img src={ item } alt={ index }/>
                                </div>
                            )) }
                        </Slider>
                        <Slider
                            asNavFor={nav1}
                            ref={c => setNav2(c)}
                            slidesToShow={ imageArr && imageArr.length > 4 ? 4 : imageArr && imageArr.length }
                            swipeToSlide={true}
                            focusOnSelect={true}
                            arrows={false}
                            slidesToScroll = { 1 }
            
                        >
                            { imageArr && imageArr.map((item , index) =>(
                                <div className="thumb" key={ index }>
                                    <img src={ item } alt={ index }/>
                                </div>
                            )) }
                        </Slider>
                    </div>
                    <div className="right-txt">
                        
                    </div>
                </div>
            </div>
        </div> }
    </>
    );
}

export default DetailShoeLace;