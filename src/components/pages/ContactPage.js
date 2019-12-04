import React from 'react';
import ContactPageView from '../ContactPage_view';
import WithCoffeeService from '../hoc/';

function ContactPage ({ CoffeeService }) {
    return (
        <>
            <ContactPageView CoffeeService={CoffeeService}/>
        </>
    )
}

export default WithCoffeeService()(ContactPage);