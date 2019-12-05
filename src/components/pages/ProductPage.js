import React, { useState, useEffect } from 'react';
import ProductPageView from '../ProductPage_view';
import WithCoffeeService from '../hoc/';


function ProductPage ({ productId, CoffeeService }) {

    const [ load, isLoad ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ item, setItem ] = useState({})

    useEffect(() => {
        
        if (!load) return;

        CoffeeService.getCoffee()
        .then(res => {
            const product = res.filter(item => item.name === productId)
            if (product.length > 0) {
                setItem(product[0]);
                isLoad(false)
            } else {
                setError(true)
            }
        })
        .catch(err => {
            console.error(err);
            setError(true)
        })

    },[CoffeeService, load, error, productId, item]);

    return (
        <>
            <ProductPageView item={item} error={error} load={load}/>  
        </>
    )
}

export default WithCoffeeService()(ProductPage);