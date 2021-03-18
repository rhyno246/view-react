import { AppBar, Avatar, Container } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react';
import { useSelector } from "react-redux";
import { Link ,NavLink, useHistory } from 'react-router-dom';
import imglogo from '../../logo.svg';
import Search from '../Search';
import './header.scss';
import { useAuth } from "../../contexts/AuthContext";

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      padding: '0 4px',
    },
}))(Badge);


const Header = () => {
    const { currentUser , logout } = useAuth()
    const history  = useHistory()
    const quantityCart = useSelector(state => state.cart.quantity)
    const nameUser = useSelector(state => state.auth.nameAuth)
    const handleToggleNav = () => {
        if(window.innerWidth <= 1024){
            var parentMenu = document.querySelector('.group')
            parentMenu.classList.toggle('active')
        }
    }

    const Logout = () => {
        logout()
        history.push("/")
    }
    
    return (
        <div className="header">
            <AppBar position="static">
                <Container>
                    <div className="menu">
                        <Link to="/product"  className="logo"><img src={ imglogo } alt=""/></Link>
                        <ul className="group">
                            <li className="item-menu"><NavLink to="/product" exact>Product</NavLink></li> 
                            <li className="item-menu"><NavLink to="/contact">Contact</NavLink></li> 
                            { currentUser ? 
                                <li className="item-menu user">
                                    <Avatar alt="Remy Sharp" src= { imglogo } />
                                    <span className="name"> <Link to="/profile"> { nameUser || currentUser.displayName } </Link> </span>
                                    <ExitToAppIcon style={{ cursor : "pointer" }} onClick={ Logout }/>
                                </li> : <div><li className="item-menu"><NavLink to="/sign-up">Sign in</NavLink></li> 
                                <li className="item-menu"><NavLink to="/login">Login</NavLink></li> </div> 
                            }
                            <li className="search-item">
                                <Search/>
                            </li> 
                        </ul>
                        <div className="position-cart">
                            <Link to="/cart">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={ quantityCart } color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Link>
                        </div> 
                        <IconButton edge="start" color="inherit" aria-label="menu" className="icon-menu" onClick={ handleToggleNav }>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Container>
            </AppBar>
        </div>
    )
}


export default Header