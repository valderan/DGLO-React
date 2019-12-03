import React from 'react';
import WithCoffeeService from '../hoc/';
import OurCoffeePageView from '../OurCoffePage_view';

function OurCoffeePage ({ CoffeeService }) {

   
    return (

        <>
            <OurCoffeePageView />
        </>
    )
}

export default WithCoffeeService()(OurCoffeePage);