import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core"
import ProductItem from '../../components/ProductItem'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Slice/productSlice';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));
const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.product)
    useEffect(() => {
        dispatch(getAllProduct())
    },[dispatch])   


    return (
        <>
            <div className="home">
                <Container className={ classes.root }>
                    <Grid container spacing={3}>
                        { productList.map(item => (
                            <Grid item xs={12} sm={3} key={ item.id }>
                                <ProductItem 
                                    id={ item.id } 
                                    title ={ item.title }
                                    price ={ item.price }
                                    image={ item.image }
                                />
                            </Grid>
                        )) }
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Home