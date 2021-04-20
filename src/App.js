import React , { Suspense } from 'react';
import { Switch , Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import { AuthProvider } from './contexts/AuthContext'
import { useSelector } from 'react-redux';
import ScrollToTop from './components/ScrollTopRouter/ScrollTopRouter';


const Home = React.lazy(() => import('./containers/Home/index'))
const Cart = React.lazy(() => import('./containers/Cart/index'))
const ProductDetail = React.lazy(() => import('./containers/ProductDetail/index'))
const DetailOtherBrand = React.lazy(() => import('./containers/DetailOtherBrand/index'))
const DetailShoeLace = React.lazy(() => import('./containers/DetailShoeLace/index'))
const SignUp = React.lazy(() => import('./containers/SignUp/index'))
const Login = React.lazy(() => import('./containers/Login/index'))
const OtherBrands = React.lazy(() => import('./containers/OrtherBrands/index'))
const Search = React.lazy(() => import('./containers/SearchPage/index'))
const NotFound = React.lazy(() => import('./containers/NotFound/index'))
const Profile = React.lazy(() => import('./containers/Profile/index'))
const ForGotPass = React.lazy(() => ('./containers/ResetPass/index'))
const ShoeLace = React.lazy(() => import('./containers/Shoelace/index'))
const CheckOut = React.lazy(() => import('./containers/CheckOut/index'))
const Men = React.lazy(() => import('./containers/Men/index'))
const Women = React.lazy(() => import('./containers/Women/index'))
const Shoes = React.lazy(() => import('./containers/Shoes/index'))

function App() {
    const isAuth = useSelector(state => state.auth.setUser)
    return (
            <div className="App" style={{ display : "flex" , flexDirection : "column" , height : "100vh" }}>
                <AuthProvider>
                    <Router>
                        <ScrollToTop/>
                        <Header/>
                        <Suspense fallback={ <span></span>}>
                            <Switch>
                                <Redirect from="/home" to="/" exact/>
                                <Route path="/" component = { Home } exact/>
                                

                                <Route path="/shoes" component ={ Shoes } exact/>
                                <Route path="/shoes/:id" component ={ ProductDetail }/>


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
                        </Suspense>
                        <Footer/>
                    </Router>
                </AuthProvider>
            </div> 
    );
}

export default App;
