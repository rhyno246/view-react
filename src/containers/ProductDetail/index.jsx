import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';
import { AddToCart } from '../../Slice/cartSlice';
import { getAllProductDetail } from '../../Slice/productSlice';
import './index.scss';
const ProductDetail = () => {
    const param = useParams()
    const id = param.id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProductDetail(id))
    } , [ dispatch , id ])
    const listDetailProduct = useSelector(state => state.product.detailproduct)
    const loading = useSelector(state => state.product.loading)
    const imageArr = listDetailProduct.image
    const handleAddToCart = () => {
        dispatch(AddToCart({
            id : listDetailProduct.id,
            title : listDetailProduct.title,
            price : listDetailProduct.price,
            image : listDetailProduct.image
        }))
    }
    return (
        <>
            { loading ? <Loading/> : <div className="product-detail">
                <div className="container">
                    <div className="main" style={{ maxWidth : "100%" }}>
                        <div className="img">
                            { imageArr && imageArr.map((item , index) =>(
                                <img src={ item } key={ index } alt={ listDetailProduct.title }/>
                            )) }
                            
                        </div>
                        <div className="right-txt">
                            <h3 className="margin name">{ listDetailProduct.title }</h3>
                            <div className="margin"><strong>Category :</strong> <span className="category">{ listDetailProduct.category }</span></div>
                            <div className="margin"><strong>Price :</strong> <span className="category">{ listDetailProduct.price } $</span></div>
                            <div className="margin"><strong>Description :</strong> <span className="description">{ listDetailProduct.description }</span></div>
                            <button onClick ={ handleAddToCart }>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div> }
        </>
    );
}

export default ProductDetail;