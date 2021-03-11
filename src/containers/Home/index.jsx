import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import ProductItem from '../../components/ProductItem';
import { getAllProduct } from '../../Slice/productSlice';
import './index.scss';
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
    const isLoading = useSelector(state => state.product.loading)
    const reRenderloading = useSelector(state => state.product.reRenderloading)
    useEffect(() => {
        if(reRenderloading){
            dispatch(getAllProduct())
        }
    },[dispatch , reRenderloading])   


    return (
        <>
            { isLoading ? <Loading/> : null }
            <div className="home">
                <Container className={ classes.root }>
                    <Grid container spacing={3}>
                        { productList.map(item => (
                            <Grid item xs={12} sm={6} md={3} key={ item.id }>
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