import React, { useState, useEffect } from 'react';
import PleasurePageView from '../PleasurePage_view';
import WithCoffeeService from '../hoc/';


function PleasurePage ({ CoffeeService }) {

    const [ items, setItems ] = useState([]);
    const [ load, isLoad ] = useState(true);
    const [ error, setError] = useState(false);
   

    useEffect(() => {
        
        if (!load) return;
        
        CoffeeService.getGoods()
        .then(res => {
            setItems(res);
            isLoad(false);
            setError(false);
        })
        .catch(err => {
            console.error(err);
            setError(true);
        })

    },[CoffeeService, load]);

    return (
        <>
            <PleasurePageView  items={items} isLoad={load} error={error}/>
        </>
    )
}

export default WithCoffeeService()(PleasurePage);