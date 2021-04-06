import { Button, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';
import { AddToCart } from '../../Slice/cartSlice';
import { getAllProductDetail } from '../../Slice/productSlice';
import ReactReadMoreReadLess from "react-read-more-read-less";
import ArrowSlide from '../../components/ArrowSlide';
import Slider from 'react-slick';
import './index.scss';


const ProductDetail = () => {
    const param = useParams()
    const id = param.id
    const { Option } = Select;
    const dispatch = useDispatch()
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [ salePrice , setSalePrice ] = useState("")
    const [sizeChange , setSizeChange] = useState(null)
    const listDetailProduct = useSelector(state => state.product.detailproduct)
    const loading = useSelector(state => state.product.loading)
    const prodId = listDetailProduct.id
    const title = listDetailProduct.title
    const imageArr = listDetailProduct.image
    const quantity = listDetailProduct.quantity
    const size = listDetailProduct.size
    const price = listDetailProduct.price
    const sale = listDetailProduct.sale
    const status = listDetailProduct.status
    let desc = listDetailProduct && listDetailProduct.description
    useEffect(() => {
        dispatch(getAllProductDetail(id))
    } , [ dispatch , id ])

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
                size : size,
                sizeChose : sizeChange || size[0],
                status : status
            }))
        }
        else{
            dispatch(AddToCart({
                id : prodId,
                title : title,
                price : price,
                image : imageArr,
                stock : quantity,
                size : size,
                sizeChose : sizeChange || size[0],
                status : status
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
                            <h3 className="margin name">{ listDetailProduct.title }</h3>
                            <div className="margin"><strong>Category :</strong> <span className="category">{ listDetailProduct.category }</span></div>
                            { sale ? <div className="margin">
                                <strong>Sale : </strong><span className="category sale">{ sale * 100 }%</span>
                                </div> : null
                            }
                            <div className="margin">
                                <strong>Price : </strong> 
                                { sale ? 
                                    <span style={{ marginRight : "10px" }} className="category new-price">
                                        { parseFloat(salePrice).toFixed(2) } $
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

export default ProductDetail;