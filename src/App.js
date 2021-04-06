import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom'
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
import { AuthProvider } from './contexts/AuthContext'
import { useSelector } from 'react-redux';
function App() {
    const isAuth = useSelector(state => state.auth.setUser)
    return (
            <div className="App" style={{ display : "flex" , flexDirection : "column" , height : "100vh" }}>
                <AuthProvider>
                    <Header/>
                        <Switch>
                            <Redirect from="/" to="/product" exact/>
                            <Route path="/product" component = { Home } exact/>
                            
                            <Route path="/product/:id" component ={ ProductDetail }/>
                            <Route path="/men" component = { Men }/>

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
                </AuthProvider>
            </div> 
    );
}

export default App;
