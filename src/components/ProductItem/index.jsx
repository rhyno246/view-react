import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart } from '../../Slice/cartSlice';
import { HeartOutlined } from '@ant-design/icons';
import './index.scss';
import { useEffect } from 'react/cjs/react.development';
const ProductItem = (props) => {
    const { title , image , price , id , size , quantity , sale} = props
    const [ salePrice , setSalePrice ] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        setSalePrice(price - sale * price)
    }, [price,sale])
    const handleAddToCart = () => {
        if(sale){
            dispatch(AddToCart({
                id : id,
                title : title,
                price : salePrice,
                image : image,
                size : size,
                stock : quantity,
                sizeChose : size[0],
            }))
        }else{
            dispatch(AddToCart({
                id : id,
                title : title,
                price : price,
                image : image,
                size : size,
                stock : quantity,
                sizeChose : size[0],
            }))
        }
        
    }

    return ( 
        <>
            <div className="product-item" type="flex">
                <Card hoverable cover={ <img alt={ title } src={ image[0] }/>} style={{ height : "100%" }}>
                    <p><Link to={`product/${id}`} className="title-product">{title}</Link></p>
                    { quantity }
                    { quantity === 0 ? <span className="outstock">Out Stock</span> : null }
                    <div className="flex-price">
                        <div>
                            <span className={ sale ? "old-price" : "price" }>{ price } $</span>
                        </div>
                        { sale ? <span className="sale">{ sale * 100 }%</span> : null }
                        { sale ? <span className="new-price"> { salePrice } $ </span> : null }
                    </div>
                    
                    <div className="flex-btn">
                        <Button onClick ={ handleAddToCart } type="warning" disabled= { quantity === 0 }>Add to cart</Button>
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