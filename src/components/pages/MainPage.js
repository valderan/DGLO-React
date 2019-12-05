import React, { useState, useEffect } from 'react';
import MainPageView from '../MainPage_view';
import WithCoffeeService from '../hoc/';

function MainPage({ CoffeeService }) {

    const [ items, setItems ] = useState([]);
    const [ load, isLoad ] = useState(true);
    const [ error, setError ] = useState(false);


    useEffect(() => {
        
        if (!load) return;
        
        CoffeeService.getBestsellers()
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

    

    return(
        <>
            <MainPageView items={items} isload={load} error={error}/>
        </>
    )
}

export default WithCoffeeService()(MainPage);