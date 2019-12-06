import React, { useState, useEffect } from 'react';
import PleasurePageView from '../PleasurePage_view';
import WithCoffeeService from '../hoc/';

import { DATA_LOADING_ERROR } from '../Error/Error.js'

function PleasurePage ({ CoffeeService }) {

    const [ items, setItems ] = useState([]);
    const [ load, isLoad ] = useState(true);
    const [ error, setError] = useState(false);
    const [ errorString, setErrorString] = useState('');

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
            setErrorString(DATA_LOADING_ERROR);
        })

    },[CoffeeService, load]);

    return (
        <>
            <PleasurePageView  items={items} isLoad={load} error={error} errorString={errorString}/>
        </>
    )
}

export default WithCoffeeService()(PleasurePage);