import { Button, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';
import { AddToCart } from '../../Slice/cartSlice';
import { getAllProductDetail } from '../../Slice/productSlice';
import ReactReadMoreReadLess from "react-read-more-read-less";
import Slider from 'react-slick';
import './index.scss';
import ArrowSlide from '../../components/ArrowSlide';

const ProductDetail = () => {
    const param = useParams()
    const id = param.id
    const { Option } = Select;
    const dispatch = useDispatch()
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    useEffect(() => {
        dispatch(getAllProductDetail(id))
    } , [ dispatch , id ])
    const listDetailProduct = useSelector(state => state.product.detailproduct)
    const loading = useSelector(state => state.product.loading)
    const imageArr = listDetailProduct.image
    const size = listDetailProduct.size
    let desc = listDetailProduct && listDetailProduct.description
    const handleAddToCart = () => {
        dispatch(AddToCart({
            id : listDetailProduct.id,
            title : listDetailProduct.title,
            price : listDetailProduct.price,
            image : listDetailProduct.image,
        }))
    }
    const handleChange = (val) => {
        console.log(val);
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
                            <h3 className="margin name">{ listDetailProduct.title }</h3>
                            <div className="margin"><strong>Category :</strong> <span className="category">{ listDetailProduct.category }</span></div>
                            <div className="margin"><strong>Price :</strong> <span className="category">{ listDetailProduct.price } $</span></div>
                            <div className="margin"><strong>Description :</strong> <span className="description">
                                <ReactReadMoreReadLess
                                    charLimit={250}
                                    readMoreText={"Read more"}
                                    readLessText={"Read less"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                >
                                    { desc ? desc : "" }
                                </ReactReadMoreReadLess>
                            </span></div>
                            <div className="margin">
                                <strong>Choose size :</strong>
                                <Select size="large" onChange={handleChange} defaultValue={ size && size[0] } style={{ width: 200 , marginLeft : "5px" }}>
                                    { size && size.map(( item,index ) => (
                                        <Option value={ item } key={ index }>{ item }</Option>
                                    )) }
                                </Select>
                            </div>
                            <Button type="primary" onClick ={ handleAddToCart }>
                                Add To Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div> }
        </>
    );
}

export default ProductDetail;