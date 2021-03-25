import { Button, Card } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart } from '../../Slice/cartSlice';
import { HeartOutlined } from '@ant-design/icons';
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
            <div className="product-item" type="flex">
                <Card hoverable cover={ <img alt={ title } src={ image[0] }/>} style={{ height : "100%" }}>
                    <p><Link to={`product/${id}`}>{title}</Link></p>
                    <div className="flex-btn">
                        <Button onClick ={ handleAddToCart } type="warning">Add to cart</Button>
                        <Button>
                            <HeartOutlined />
                        </Button>
                        <div className="price">{ price } $</div>
                    </div>
                </Card>
            </div>
        </>
    )
}


export default ProductItem