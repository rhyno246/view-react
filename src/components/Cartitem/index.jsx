import React from 'react'
import "./index.scss"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { plusCart, RemoveProductToCart , dashItemCart, changeSizeCart } from '../../Slice/cartSlice';
import { Button, Select } from 'antd';



const CartItem = (props) => {
    const { id , title , image , price , quantity , size , sizeChose , stock , status } = props
    const { Option } = Select;
    const dispatch = useDispatch()
    const handleDeleteCartItem = () => {
        dispatch(RemoveProductToCart({
            id : id,
            price : price,
            quantity : quantity
        }))
    }
    const handleDashCart = () => {
        dispatch(dashItemCart({id : id}))
    }
    const handlePlusCart = () => {
        dispatch(plusCart({id : id }))
    }
    
    // const changeNumberCart = (val , info) => {
    //     if(info.type === "up"){
    //         dispatch(plusCart({
    //             id : id, 
    //             stock : stock,
    //         }))
    //     }
    //     if(info.type === "down"){
    //         dispatch(dashItemCart({id : id}))
    //     }
    // }
 
    // const handleBlurInput = debounce((val) => {
    //     dispatch(BlurInputCart({
    //         number : val,
    //         id : id,
    //         stock : stock
    //     }))
    // }, 700)

    const changeItemSelectCart = (val) => {
        dispatch(changeSizeCart({
            val : val,
            id : id
        }))
    }


    return (
       <div className="cart-item">
           <div className="container">
                <div className="cart-group">
                    <div className="cart-img">
                        <img src= { image[0] } alt={ title } />
                    </div>
                    <div className="text">
                        <div className="pb-10 cart-title">
                            <h4>
                                <Link 
                                     to={ status === "product" ? `shoes/${id}` : null ||
                                     status === "otherbrand" ? `other-brands/${id}` :  null ||
                                     status === "Shoelace" ? `shoes-lace/${id}` : null} 
                                >
                                    { title }
                                </Link>
                            </h4>
                        </div>
                        <div className="pb-10 price"><strong>price :</strong> <span className="color-cart">{ parseFloat(price).toFixed(2) } $</span></div>
                        <div className="pb-10 quantity"><strong>quantity : </strong><span className="color-cart">{ quantity }</span></div>
                        { size ? <div className="margin">
                            <strong>Choose size :</strong>
                            <Select 
                                size="large" defaultValue={ sizeChose } 
                                onChange={ changeItemSelectCart } 
                                style={{ width: 150 , marginBottom : "20px" , marginLeft : "10px" }}
                            >
                                { size && size.map(( item,index ) => (
                                    <Option value={ item } key={ index }>{ item }</Option>
                                )) }
                            </Select>
                        </div> : null }
                        <div className="input-count" style={{ marginBottom: "40px" }}>
                            <strong>More product : </strong>
                            {/* <InputNumber defaultValue={ quantity } min={ 1 } max= { stock } onStep={ changeNumberCart } onChange = { handleBlurInput }/> */}
                    
                            <button className="input-number-decrement" onClick={  handleDashCart } disabled={ quantity <= 1 }>–</button>
                            <span className="quantity-number">{ quantity }</span>
                            <button className="input-number-increment" onClick={ handlePlusCart } disabled={ quantity === stock }>+</button>
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