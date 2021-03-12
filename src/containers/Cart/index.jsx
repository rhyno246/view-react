import { Button, Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
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
            <Container>
                { cartList.length > 0 ?  <div className="main-cart">
                    <Grid container spacing={3}>
                        { cartList.map(item => (
                            <Grid key={ item.id } item xs={12} sm={6} md={6}>
                                <CartItem 
                                    id={ item.id } 
                                    title={ item.title } 
                                    image={ item.image }
                                    price={ item.price }
                                    quantity = { item.quantity }
                                />
                            </Grid>
                        )) }
                    </Grid>
                    <div className="group-checkout">
                        <div className="total">Total Price : { totalCart.toFixed(2) } $</div>
                        <Button variant="contained" color="primary">
                            Check out
                        </Button>
                    </div>
                </div> : <div className="emtry-cart">
                            <img src={ cartEmtry } alt=""/>
                            <div className="txt">Opps !!! Cart Empty</div>
                            <Link to="/" className="continue">Continue Shopping</Link>
                        </div> 
                }
            </Container>
        </div>
    )
}

export default Cart