import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { AddToCart } from '../../Slice/cartSlice';
import { HeartOutlined , DeleteOutlined } from '@ant-design/icons';
import { db } from '../../firebase/firebase'
import { useAuth } from "../../contexts/AuthContext";
import './index.scss';
import { useEffect } from 'react/cjs/react.development';
const ProductItem = (props) => {
    const { title , image , price , id , size , quantity , sale , isProduct , otherbrand , shoeslace , product} = props
    const { currentUser } = useAuth()
    const isAuth = useSelector(state => state.auth.setUser)
    const [ salePrice , setSalePrice ] = useState("")
    const [loading , setLoading] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const email = currentUser && currentUser.email
    console.log(props);
    useEffect(() => {
        setSalePrice(price - sale * price)
        
    }, [price,sale])
    const handleAddToCart = () => {
        if(isProduct){
            db.collection(email).doc(id).delete().then(() => {
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
        if(sale){
            dispatch(AddToCart({
                id : id,
                title : title,
                price : salePrice,
                image : image,
                size : size,
                stock : quantity,
                sizeChose : size
            }))
        }else{
            dispatch(AddToCart({
                id : id,
                title : title,
                price : price,
                image : image,
                size : size,
                stock : quantity,
                sizeChose : size
            }))
        }
        
    }


    const handleWishList = () => {
        setLoading(true)
        if(!isAuth){
            history.push('/login')
        }else{
            const newData = {
                id : id,
                title : title,
                image : image,
                price : price || salePrice,
                size : size,
                quantity : quantity,
                sale : sale,
                isProduct : true
            }
            db.collection(email).doc(newData.id).set(newData).then(() => {
                setLoading(false)
            }).catch((error) => {
                setLoading(false)
                console.error("Error removing document: ", error);
            });
        }
    }


    const handleDeleteWishlist = () => {
        db.collection(email).doc(id).delete().then(() => {
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    return ( 
        <>
            <div className="product-item" type="flex">
                <Card hoverable cover={ <img alt={ title } src={ image[0] }/>} style={{ height : "100%" }}>
                    <p>
                        <Link 
                            to={ product ? `product/${id}` : null || 
                            otherbrand ? `other-brands/${id}` : null || 
                            shoeslace ? `shoes-lace/${id}` : null } 
                            className="title-product"
                        >
                            {title}
                        </Link>
                    </p>
                    { quantity === 0 ? <span className="outstock">Out Stock</span> : <span></span> }
                    <div className="flex-price">
                        <div>
                            <span className={ sale ? "old-price" : "price" }>{ price } $</span>
                        </div>
                        { sale ? <span className="sale">{ sale * 100 }%</span> : <span></span>}
                        { sale ? <span className="new-price"> { salePrice } $ </span> : <span></span> }
                    </div>
                    
                    <div className="flex-btn">
                        <Button onClick ={ handleAddToCart } type="warning" disabled= { quantity === 0 }>Add to cart</Button>

                        { isProduct ? 
                            <Button style={{ marginLeft : "10px" }} onClick ={ handleDeleteWishlist }>
                                <DeleteOutlined />
                            </Button> : 
                            <Button style={{ marginLeft : "10px" }} onClick = { handleWishList } loading ={ loading } disabled= { loading }>
                                { loading ? "Loading" : <HeartOutlined /> }
                            </Button>   
                        }
                    </div>
                </Card>
            </div>
        </>
    )
}


export default ProductItem