import React from 'react';
import Header from "./Header/Header";
import { BurgerBuilder } from './BurgerBuilder/BurgerBuilder';

const Main = () => {
    return( 
        <div>
            <Header />
            <BurgerBuilder />
        </div>
    )
}

export default Main;