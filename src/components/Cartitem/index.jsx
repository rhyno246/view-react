import React, { useState } from 'react'
import "./index.scss"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { plusCart, RemoveProductToCart , dashItemCart, BlurInputCart } from '../../Slice/cartSlice';
import { Button, InputNumber } from 'antd';
import { debounce } from '../../untils/helper';



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
    
    const changeNumberCart = (val , info) => {
        if(info.type === "up"){
            dispatch(plusCart({id : id }))
        }
        if(info.type === "down"){
            dispatch(dashItemCart({id : id}))
        }
    }
 
    const handleBlurInput = debounce((val) => {
        dispatch(BlurInputCart({
            number : val,
            id : id
        }))
    }, 700)




    return (
       <div className="cart-item">
           <div className="container">
                <div className="cart-group">
                    <div className="cart-img">
                        <img src= { image[0] } alt={ title } />
                    </div>
                    <div className="text">
                        <div className="pb-10 cart-title"><h4><Link to={`product/${id}`}>{ title }</Link></h4></div>
                        <div className="pb-10 price"><strong>price :</strong> <span className="color-cart">{ price } $</span></div>
                        <div className="pb-10 quantity"><strong>quantity : </strong><span className="color-cart">{ quantity }</span></div>
                        <div className="input-count" style={{ marginBottom: "40px" }}>
    
                            <InputNumber defaultValue={ quantity } min={ 1 } onStep={ changeNumberCart } onChange = { handleBlurInput }/>
                    
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
                        <Button onClick={ handleDeleteCartItem } type="danger">Delete</Button>
                    </div>
                </div>
            </div>
       </div>
   ) 
}

export default CartItem