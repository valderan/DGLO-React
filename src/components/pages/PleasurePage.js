import React, { useState, useEffect } from 'react';
import PleasurePageView from '../PleasurePage_view';
import WithCoffeeService from '../hoc/';


function PleasurePage ({ CoffeeService }) {

    const [ items, setItems ] = useState([]);
    const [ load, isLoad ] = useState(true);
   

    useEffect(() => {
        
        if (!load) return;
        
        CoffeeService.getGoods()
        .then(res => {
            setItems(res);
            isLoad(false)
        })
        .catch(err => {
            console.error(err);
            throw new Error(err)
        })

    },[CoffeeService, load]);

    return (
        <>
            <PleasurePageView  items={items} isLoad={load}/>
        </>
    )
}

export default WithCoffeeService()(PleasurePage);