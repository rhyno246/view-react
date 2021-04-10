import React from 'react';
import { Switch , Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from "./containers/Home/index"
import Cart from './containers/Cart/index'
import ProductDetail from './containers/ProductDetail/index'
import DetailOtherBrand from './containers/DetailOtherBrand/index'
import DetailShoeLace from './containers/DetailShoeLace/index'
import SignUp from './containers/SignUp/index'
import Login from './containers/Login/index'
import OtherBrands from './containers/OrtherBrands/index'
import Search from './containers/SearchPage/index'
import NotFound from './containers/NotFound/index'
import Footer from './components/Footer'
import Profile from './containers/Profile/index'
import ForGotPass from './containers/ResetPass/index'
import ShoeLace from './containers/Shoelace/index'
import CheckOut from './containers/CheckOut/index'
import Men from './containers/Men/index'
import Women from './containers/Women/index'
import Shoes from './containers/Shoes/index'
import { AuthProvider } from './contexts/AuthContext'
import { useSelector } from 'react-redux';
import ScrollToTop from './components/ScrollTopRouter/ScrollTopRouter';
function App() {
    const isAuth = useSelector(state => state.auth.setUser)
    return (
            <div className="App" style={{ display : "flex" , flexDirection : "column" , height : "100vh" }}>
                <AuthProvider>
                    <Router>
                        <ScrollToTop/>
                        <Header/>
                        <Switch>
                            <Redirect from="/home" to="/" exact/>
                            <Route path="/" component = { Home } exact/>
                            

                            <Route path="/shoes" component ={ Shoes }/>

                            <Route path="/product/:id" component ={ ProductDetail }/>
                            <Route path="/men" component = { Men }/>
                            <Route path="/women" component = { Women }/>

                            <Route path="/cart" component = { Cart } />
                            <Route path="/sign-up">
                                { isAuth ? <Redirect to="/"/> : <SignUp/>  }
                            </Route>
                            <Route path="/search" component = { Search }/>
                            <Route path="/other-brands" component ={ OtherBrands } exact/>
                            <Route path="/other-brands/:id" component = { DetailOtherBrand }/>

                            <Route path="/shoes-lace" component ={ ShoeLace } exact/>
                            <Route path="/shoes-lace/:id" component ={ DetailShoeLace }/>

                            <Route path="/profile">
                                { !isAuth ? <Redirect to="/"/> : <Profile/> }
                            </Route>
                            <Route path="/login">
                                { isAuth ? <Redirect to="/"/> : <Login/> }
                            </Route>
                            <Route path="/reset-password" component = { ForGotPass }/>
                            <Route path='/check-out'>
                                { !isAuth ? <Redirect to="/login"/> : <CheckOut/>}
                            </Route>
                            <Route path="*" component = { NotFound } />
                        </Switch>
                        <Footer/>
                    </Router>
                </AuthProvider>
            </div> 
    );
}

export default App;
