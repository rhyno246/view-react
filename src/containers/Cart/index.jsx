import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartEmtry from '../../cart.png';
import CartItem from "../../components/Cartitem";
import './index.scss';


const Cart = () => {
    const cartList = useSelector(state => state.cart.cart)
    const totalCart = useSelector(state => state.cart.total)
    return (
        <div className="cart">
            { cartList.length > 0 ?  
            <div className="main-cart"> 
                { cartList.map(item => (
                    <CartItem 
                        id={ item.id } 
                        title={ item.title } 
                        image={ item.image }
                        price={ item.price }
                        quantity = { item.quantity }
                    />
                )) }
                <div className="group-checkout">
                    <div className="total">Total Price : { totalCart.toFixed(2) } $</div>
                    <button>Check Out</button>
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