import { Button, Card } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartEmtry from '../../img_local/cart.png';
import CartItem from "../../components/Cartitem";
import { checkOut, removeAllCart } from '../../Slice/cartSlice';
import './index.scss';


const Cart = () => {
    const cartList = useSelector(state => state.cart.cart)
    const totalCart = useSelector(state => state.cart.total)
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.setUser)
    const ClearAllCart = () => {
        dispatch(removeAllCart())
    }

    const handleCheckOut = () => {
        dispatch(checkOut(cartList))
    }

    return (
        <div className="cart">
            { cartList && cartList.length > 0 ?  
            <div className="main-cart"> 
                <div className="container">
                    { cartList.map(item => (
                        <Card hoverable cover key={ item.id } style={{ marginBottom : "20px" }}>
                            <CartItem 
                                id={ item.id } 
                                title={ item.title } 
                                image={ item.image }
                                price={ item.price }
                                quantity = { item.quantity }
                                size = { item.size }
                                sizeChose = { item.sizeChose }
                                stock = { item.stock }
                            /> 
                        </Card>
                    )) }
                    <div className="group-checkout">
                        <div className="total">Total Price : { totalCart } $</div>
                        <Button type="danger" style={{ marginRight : "10px" }} onClick ={ ClearAllCart }>Clear All</Button>
                        <Button type="primary" onClick={ handleCheckOut }>
                            <Link to={ isAuth ? `/check-out` : `/login` }>
                                Check Out
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>:
                <div className="emtry-cart">
                    <img src={ cartEmtry } alt=""/>
                    <div className="txt">Opps !!! Cart Empty</div>
                    <Link to="/" className="continue">Continue Shopping</Link>
                </div> 
            }
        </div>
    )
}

export default Cart