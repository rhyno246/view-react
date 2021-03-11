import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height : "100%",
      display : "flex",
      flexDirection : "column"
    },
    media: {
      height: 270,
    },
    action : {
        marginTop : "auto"
    }
});
const ProductItem = (props) => {
    const classes = useStyles();
    const { title , image , price , id} = props
    return ( 
        <>
            <div className="product-item">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={ image }
                            title={ title }
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <span className="title"><Link to={`product/${id}`}>{title}</Link></span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={ classes.action }>
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                            <Button variant="contained" color="primary">
                                Add To Cart
                            </Button>
                            <div className="price">{ price } $</div>
                        </Box>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}


export default ProductItem