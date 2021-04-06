import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArrowSlide from '../../components/ArrowSlide';
import Loading from '../../components/Loading';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { AddToCart } from '../../Slice/cartSlice';
import { Button, Select } from 'antd';
import Slider from 'react-slick';
import './index.scss'
import { getDetailShoelace } from '../../Slice/productSlice';
function DetailShoeLace(props) {
    const param = useParams()
    const id = param.id;
    const dispatch = useDispatch()
    const { Option } = Select;
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
    const status = listShoeslace.status
    let desc = listShoeslace && listShoeslace.description
    useEffect(() => {
        dispatch(getDetailShoelace(id))
    }, [ dispatch ,  id])
    useEffect(() => {
        setSalePrice(price - sale * price)
    },[price , sale])
    const handleChange = (val) => {
        setSizeChange(val)
    }
    const handleAddToCart = () => {
        if(sale){
            dispatch(AddToCart({
                id : prodId,
                title : title,
                price : salePrice,
                image : imageArr,
                stock : quantity,
                shoeslace : true,
                size : size,
                status : status,
                sizeChose : sizeChange || size[0],
            }))
        }
        else{
            dispatch(AddToCart({
                id : prodId,
                title : title,
                price : price,
                image : imageArr,
                stock : quantity,
                shoeslace : true,
                status : status,
                size : size,
                sizeChose : sizeChange || size[0],
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
                        <h3 className="margin name">{ title }</h3>
                        { sale ? <div className="margin">
                            <strong>Sale : </strong><span className="category sale">{ sale * 100 }%</span>
                            </div> : null
                        }
                        <div className="margin">
                            <strong>Price : </strong> 
                            { sale ? 
                                <span style={{ marginRight : "10px" }} className="category new-price">
                                    { salePrice } $
                                </span> : null 
                                }
                            <span className={sale ? "old-price" : "new-price" }>{ price } $</span>
                        </div> 
                        {   quantity === 0 ? <div className="margin"> 
                                <span className="category">Out Stock</span> 
                                </div> :
                            <div className="margin"><strong>Quantity : </strong> 
                                <span className="category">{ quantity } </span> 
                            </div>
                        }
                        <div className="margin">
                            <strong>Description :</strong> 
                            <span className="description">
                                <ReactReadMoreReadLess
                                    charLimit={250}
                                    readMoreText={"Read more"}
                                    readLessText={"Read less"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                >
                                    { desc ? desc : "" }
                                </ReactReadMoreReadLess>
                            </span>
                        </div>
                        <div className="margin">
                            <Select size="large" 
                                onChange={handleChange} 
                                defaultValue="Choose Size"
                                style={{ width: 200 , marginLeft : "5px" }}
                            >
                                { size && size.map(( item,index ) => (
                                    <Option value={ item } key={ index }>{ item }</Option>
                                )) }
                            </Select>
                        </div>
                        <Button type="primary" onClick ={ handleAddToCart } disabled = { quantity === 0 }>
                            Add To Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div> }
    </>
    );
}

export default DetailShoeLace;