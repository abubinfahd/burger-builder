import React from 'react';
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import {Route} from "react-router-dom";
import Auth from "./Auth/Auth"

const Main = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Route path="/orders" component={Orders} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/login" exact component={Auth} />
                <Route path="/" exact component={BurgerBuilder} />
            </div>
        </div>
    )
}

export default Main;