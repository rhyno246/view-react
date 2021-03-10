import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});
const ProductItem = (props) => {
    const classes = useStyles();
    const { title , image , price , id } = props
    return ( 
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
                        {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="primary">
                        Add To Cart
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}


export default ProductItem