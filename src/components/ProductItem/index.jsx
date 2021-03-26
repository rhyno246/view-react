import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart } from '../../Slice/cartSlice';
import { HeartOutlined } from '@ant-design/icons';
import './index.scss';
const ProductItem = (props) => {
    const { title , image , price , id , size , quantity , sale} = props
    const [countQuantity , setCountQuantity] = useState(0)
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        if(countQuantity >= quantity){
            return
        }else{
            setCountQuantity(countQuantity + 1)
            dispatch(AddToCart({
                id : id,
                title : title,
                price : price,
                image : image,
                size : size,
            }))
        }
    }

    return ( 
        <>
            <div className="product-item" type="flex">
                <Card hoverable cover={ <img alt={ title } src={ image[0] }/>} style={{ height : "100%" }}>
                    <p><Link to={`product/${id}`}>{title}</Link></p>
                    { quantity === 0 ? <span className="outstock">Out Stock</span> : null }
                    {/* { quantity } */}
                    <div className="price">
                        <div>
                            <span className="old-price">{ price } $</span>
                        </div>
                        { sale ? <span className="sale">sale : { sale }%</span> : null }
                        { sale ? <span className="new-price">22 $</span> : null }
                    </div>
                    
                    <div className="flex-btn">
                        <Button onClick ={ handleAddToCart } type="warning" disabled= { quantity === 0 || countQuantity >= quantity}>Add to cart</Button>
                        <Button style={{ marginLeft : "10px" }}>
                            <HeartOutlined />
                        </Button>
                        
                    </div>
                </Card>
            </div>
        </>
    )
}


export default ProductItem