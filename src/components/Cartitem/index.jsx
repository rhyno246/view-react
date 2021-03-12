import React from 'react'
import "./index.scss"
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { RemoveProductToCart } from '../../Slice/cartSlice';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height : "100%"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const CartItem = (props) => {
    const classes = useStyles();
    const { id , title , image , price , quantity } = props
    const dispatch = useDispatch()
    const handleDeleteCartItem = (id) => {
        dispatch(RemoveProductToCart({id : id}))
    }
    return (
       <div className="cart-item">
           <Card className={ classes.root }>
                <div className="cart-group">
                    <div className="cart-img">
                        <img src= { image } alt={ title } />
                    </div>
                    <div className="text">
                        <div className="pb-10 cart-title"><h4>{ title }</h4></div>
                        <div className="pb-10 price"><strong>price :</strong> <span className="color-cart">{ price } $</span></div>
                        <div className="pb-10 quantity"><strong>quantity : </strong><span className="color-cart">{ quantity }</span></div>
                        <div className="input-count" style={{ marginBottom: "40px" }}>
                            <span className="input-number-decrement">–</span>
                            {/* <input type="number" className="input-number" value={ item.quantity }/> */}
                            <span className="input-number">{ quantity }</span>
                            <span className="input-number-increment">+</span>
                        </div>
                    </div>
                    <div className="delete-cart">
                        <IconButton aria-label="delete" className={classes.margin} color="secondary" onClick={ () =>  handleDeleteCartItem(id) }>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
            </Card>
       </div>
   ) 
}

export default CartItem