import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from "./containers/Home/index"
import Cart from './containers/Cart/index'
import ProductDetail from './containers/ProductDetail/index'
import SignUp from './containers/SignUp/index'
import Login from './containers/Login/index'
import Contact from './containers/Contact/index'
import NotFound from './containers/NotFound/index'
import Footer from './components/Footer'
function App() {

    return (
        <div className="App" style={{ display : "flex" , flexDirection : "column" , height : "100vh" }}>
            <Header/>
                <Switch>
                    <Redirect exact from="/" to="/product" />
                    <Route path="/product" exact component = { Home }/>
                    <Route path="/product/:id" component ={ ProductDetail }/>
                    <Route path="/cart" component = { Cart } />
                    <Route path="/sign-up" component = { SignUp }/>
                    <Route path="/login" component = { Login }/>
                    <Route path="/contact" component ={ Contact }/>
                    <Route path="*" component = { NotFound } />
                </Switch>
            <Footer/>
        </div>
    );
}

export default App;
