import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart } from '../../Slice/cartSlice';
import './index.scss';
const ProductItem = (props) => {
    const { title , image , price , id} = props
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(AddToCart({
            id : id,
            title : title,
            price : price,
            image : image
        }))
    }

    return ( 
        <>
            <div className="product-item">

                <div>
                    <img src={ image } alt=""/>
                    <p><Link to={`product/${id}`}>{title}</Link></p>
                    <button onClick ={ handleAddToCart }>Add to cart</button>
                    <div className="price">{ price } $</div>
                </div>
            </div>
        </>
    )
}


export default ProductItem