import React, { useState } from 'react'
import "./index.scss"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { plusCart, RemoveProductToCart , dashItemCart, BlurInputCart } from '../../Slice/cartSlice';



const CartItem = (props) => {
    const { id , title , image , price , quantity } = props
    const dispatch = useDispatch()
    const [ input , setInput ] = useState(quantity)
    const handleDeleteCartItem = () => {
        dispatch(RemoveProductToCart({id : id}))
    }
    const handleDashCart = () => {
        dispatch(dashItemCart({id : id}))
    }
    const handlePlusCart = () => {
        dispatch(plusCart({id : id }))
    }
    
    const handleBlurInput = () => {
        if(input === ""){
            return
        }
        dispatch(BlurInputCart(input))
    }




    return (
       <div className="cart-item">
           <div>
                <div className="cart-group">
                    <div className="cart-img">
                        <img src= { image } alt={ title } />
                    </div>
                    <div className="text">
                        <div className="pb-10 cart-title"><h4><Link to={`product/${id}`}>{ title }</Link></h4></div>
                        <div className="pb-10 price"><strong>price :</strong> <span className="color-cart">{ price } $</span></div>
                        <div className="pb-10 quantity"><strong>quantity : </strong><span className="color-cart">{ quantity }</span></div>
                        <div className="input-count" style={{ marginBottom: "40px" }}>
                            <button className="input-number-decrement" onClick={  handleDashCart } disabled={ quantity <= 1 }>–</button>
                            <input type="number" className="input-number" 
                                value={ quantity } 
                                onChange={ e => setInput(e.target.value) } 
                                onBlur = { handleBlurInput }
                            />
                            <button className="input-number-increment" onClick={ handlePlusCart }>+</button>
                        </div>
                    </div>
                    <div className="delete-cart">
                        <button onClick={ handleDeleteCartItem }>Delete</button>
                    </div>
                </div>
            </div>
       </div>
   ) 
}

export default CartItem