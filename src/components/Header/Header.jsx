import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { Container } from "@material-ui/core"
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import imglogo from '../../logo.svg'


const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      padding: '0 4px',
    },
}))(Badge);


const Header = () => {
    return (
        <div className="header">
            <Container>
                <ul>
                    <li  className="logo"><Link to="/product"><img src={ imglogo } alt=""/></Link></li>
                    <li><Link to="/product">Product</Link></li> 
                    <li>
                        <Link to="/cart">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                    </li> 
                </ul>
            </Container>
        </div>
    )
}


export default Header