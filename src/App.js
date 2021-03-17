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
import { AuthProvider } from './contexts/AuthContext';
function App() {
    return (
            <div className="App" style={{ display : "flex" , flexDirection : "column" , height : "100vh" }}>
                <Header/>
                    <AuthProvider>
                        <Switch>
                            <Redirect exact from="/" to="/product" />
                            <Route path="/product" exact component = { Home }/>
                            <Route path="/product/:id" component ={ ProductDetail }/>
                            <Route path="/cart" component = { Cart } />
                            <Route path="/sign-up" component = { SignUp }/>
                            <Route path="/login" component = { Login }/>
                            <Route path="/search" component = { Search }/>
                            <Route path="/contact" component ={ Contact }/>
                            <Route path="*" component = { NotFound } />
                        </Switch>
                    </AuthProvider>
                <Footer/>
            </div> 
    );
}

export default App;
