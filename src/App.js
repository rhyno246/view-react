import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from "./containers/Home/index"
import Cart from './containers/Cart/index'
import ProductDetail from './containers/ProductDetail/index'
import SignUp from './containers/SignUp/index'
import Login from './containers/Login/index'
import Contact from './containers/Contact/index'
import Search from './containers/SearchPage/index'
import NotFound from './containers/NotFound/index'
import Footer from './components/Footer'
import Profile from './containers/Profile/index'
import { AuthProvider } from './contexts/AuthContext';
import { useSelector } from 'react-redux';
function App() {
    const isAuth = useSelector(state => state.auth.setUser)
    return (
            <div className="App" style={{ display : "flex" , flexDirection : "column" , height : "100vh" }}>
                <AuthProvider>
                    <Header/>
                        <Switch>
                            <Redirect from="/" to="/product" exact/>
                            <Route path="/product" component = { Home } />
                            <Route path="/product/:id" component ={ ProductDetail }/>
                            <Route path="/cart" component = { Cart } />
                            <Route path="/sign-up">
                                { isAuth ?  <Redirect to="/"/> :  <SignUp/>}
                            </Route>
                            <Route path="/search" component = { Search }/>
                            <Route path="/contact" component ={ Contact }/>
                            <Route path="/profile" component ={ Profile }/>
                            <Route path="/login">
                                { isAuth ? <Redirect to="/"/> : <Login/> }
                            </Route>
                            <Route path="*" component = { NotFound } />
                        </Switch>
                    <Footer/>
                </AuthProvider>
            </div> 
    );
}

export default App;
