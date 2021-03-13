import React from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import './index.scss'
import ProductItem from '../../components/ProductItem';
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
const SearchPage = (props) => {
    const classes = useStyles();
    const search = useSelector(state => state.product.search)
    // const strSearch = useSelector(state => state.product.searchTerm)
    return (
        <>
            { search.length <= 0  ? <div className="cannot-find"> Can not find product !!! </div> :  
                <div className="search-page">
                    <Container className={ classes.root }>
                        <Grid container spacing={3}>
                            { search.map(item => (
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
            }
        </>
    )
}


export default SearchPage