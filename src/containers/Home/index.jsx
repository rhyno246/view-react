import Grid from '@material-ui/core/Grid';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core"
import ProductItem from '../../components/ProductItem'
import './index.scss'

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
    return (
        <div className="home">
            <Container className={ classes.root }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <ProductItem />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home