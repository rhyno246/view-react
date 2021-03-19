import React from 'react';
import { useSelector } from "react-redux";
import { Link ,NavLink, useHistory } from 'react-router-dom';
import imglogo from '../../logo.svg';
import Search from '../Search';
import './header.scss';
import { useAuth } from "../../contexts/AuthContext";
import Avatar from 'antd/lib/avatar/avatar';
import { LoginOutlined , MenuOutlined } from '@ant-design/icons';


const Header = () => {
    const { currentUser , logout } = useAuth()
    const name = currentUser && currentUser.displayName
    const nameUser = useSelector(state => state.auth.nameAuth)
    const subUserName = nameUser && nameUser.substring(1, 0).toUpperCase()
    const subname = name && name.substring(1, 0).toUpperCase()
    const history  = useHistory()
    const quantityCart = useSelector(state => state.cart.quantity)
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
            <div className="container">
                <div className="menu">
                    <Link to="/product"  className="logo"><img src={ imglogo } alt=""/></Link>
                    <ul className="group">
                        <li className="item-menu"><NavLink to="/product" exact>Product</NavLink></li> 
                        <li className="item-menu"><NavLink to="/contact">Contact</NavLink></li> 
                        { currentUser ? 
                            <li className="item-menu user">
                                <Avatar> { subUserName || subname } </Avatar>
                                <span className="name"> <Link to="/profile"> { nameUser || name } </Link> </span>
                                <LoginOutlined onClick={ Logout }/>
                            </li> : <div><li className="item-menu"><NavLink to="/sign-up">Sign in</NavLink></li> 
                            <li className="item-menu"><NavLink to="/login">Login</NavLink></li> </div> 
                        }
                        <li className="search-item">
                            <Search/>
                        </li> 
                    </ul>
                    <div className="position-cart">
                        <Link to="/cart">
                            <div>
                                { quantityCart }
                            </div>
                        </Link>
                    </div> 
                    <MenuOutlined className="icon-menu" onClick={ handleToggleNav }/>
                </div>
            </div>
                    
        </div>
    )
}


export default Header