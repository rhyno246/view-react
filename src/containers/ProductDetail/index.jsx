import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';
import { getAllProductDetail } from '../../Slice/productSlice';
import './index.scss';
const ProductDetail = () => {

    const param = useParams()
    const id = param.id
    const dispatch = useDispatch()
    const listDetailProduct = useSelector(state => state.product.detailproduct)
    const loading = useSelector(state => state.product.loading)

    useEffect(() => {
        dispatch(getAllProductDetail(id))
    } , [ dispatch , id ])



    return (
        <>
            { loading ? <Loading/> : <div className="product-detail">
                <div className="main">
                    <div className="img">
                        <img src={ listDetailProduct.image } alt={ listDetailProduct.title }/>
                    </div>
                    <div className="right-txt">
                        <h3 className="margin name green">{ listDetailProduct.title }</h3>
                        <h3 className="margin name yellow">{ listDetailProduct.title }</h3>
                        <div className="margin"><strong>Category :</strong> <span className="category">{ listDetailProduct.category }</span></div>
                        <div className="margin"><strong>Price :</strong> <span className="category">{ listDetailProduct.price } $</span></div>
                        <div className="margin"><strong>Description :</strong> <span className="description">{ listDetailProduct.description }</span></div>
                    </div>
                </div>
            </div> }
        </>
    );
}

export default ProductDetail;