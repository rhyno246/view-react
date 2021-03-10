import React from 'react';
import { Switch , Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from "./containers/Home/index"
import Cart from './containers/Cart/index'
function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component = { Home }/>
                <Route exact path="/cart" component = { Cart } />
            </Switch>
        </div>
    );
}

export default App;
