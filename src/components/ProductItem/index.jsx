import { Button, Card } from 'antd';
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
                <Card hoverable cover={ <img alt={ title } src={ image }/> }>
                    <p><Link to={`product/${id}`}>{title}</Link></p>
                    <div className="flex-btn">
                        <Button onClick ={ handleAddToCart } type="primary">Add to cart</Button>
                        <div className="price">{ price } $</div>
                    </div>
                </Card>
            </div>
        </>
    )
}


export default ProductItem