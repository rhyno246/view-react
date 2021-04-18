import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link ,NavLink, useHistory } from 'react-router-dom';
import imglogo from '../../img_local/logo_shoes.png';
import Search from '../Search';
import './header.scss';
import { useAuth } from "../../contexts/AuthContext";
import Avatar from 'antd/lib/avatar/avatar';
import { LoginOutlined , MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { setRemoveAuth } from '../../Slice/authSlice';
import { removeAllCart } from '../../Slice/cartSlice';
import { storage } from '../../firebase/firebase';


const Header = () => {
    const { currentUser , logout } = useAuth()
    const name = currentUser && currentUser.displayName
    const nameUser = useSelector(state => state.auth.nameAuth)
    const subUserName = nameUser && nameUser.substring(1, 0).toUpperCase()
    const subname = name && name.substring(1, 0).toUpperCase()
    const id = currentUser && currentUser.uid
    const [avatar ,setAvatar] = useState(null)
    const quantityCart = useSelector(state => state.cart.quantity)
    const isAuth = useSelector(state => state.auth.setUser)
    const avatarNull = useSelector(state => state.auth.avatar)
    const history  = useHistory()
    const dispatch = useDispatch()
    const handleToggleNav = () => {
        if(window.innerWidth <= 1024){
            var parentMenu = document.querySelector('.group')
            parentMenu.classList.toggle('active')
        }
    }
    const Logout = () => {
        logout()
        dispatch(setRemoveAuth(false))
        dispatch(removeAllCart())
        history.push("/")
        setAvatar("")
    }

    useEffect(() => {
        if(id){
            storage.ref('users/' + id + '/profile.jpg').getDownloadURL().then(url => {
                setAvatar(url)
            })
        }
        var itemmenu = document.querySelector('.group')
        itemmenu.addEventListener('click' , function () {
            itemmenu.classList.remove('active')
        })
    } , [id])
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="menu">
                        <Link to="/"  className="logo"><img src={ imglogo } alt=""/></Link>
                        <ul className="group">
                            <li className="item-menu"><NavLink to="/" exact>Home</NavLink></li> 
                            <li className="item-menu"><NavLink to="/shoes">Shoes</NavLink></li> 
                            <li className="item-menu"><NavLink to="/other-brands">Other Brands</NavLink></li> 
                            <li className="item-menu"><NavLink to="/shoes-lace">Shoes Lace</NavLink></li> 
                            { isAuth ? 
                                <li className="item-menu user">
                                    <Avatar src={ avatarNull || avatar }> { subUserName || subname } </Avatar>
                                    <span className="name"> <NavLink to="/profile"> { nameUser || name } </NavLink> </span>
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
                                <Badge count={ quantityCart }>
                                    <ShoppingCartOutlined />
                                </Badge> 
                            </Link>
                        </div> 
                        <MenuOutlined className="icon-menu" onClick={ handleToggleNav }/>
                    </div>
                </div>
                        
            </div>
        </div>
        
    )
}


export default Header