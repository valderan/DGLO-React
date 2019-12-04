import React, { useState, useEffect } from 'react';
import MainPageView from '../MainPage_view';
import WithCoffeeService from '../hoc/';

function MainPage({ CoffeeService }) {

    const [ items, setItems ] = useState([]);
    const [ load, isLoad ] = useState(true);


    useEffect(() => {
        
        if (!load) return;
        
        CoffeeService.getBestsellers()
        .then(res => {
            setItems(res);
            isLoad(false)
        })
        .catch(err => {
            console.error(err);
            throw new Error(err)
        })

    },[CoffeeService, load]);

    

    return(
        <>
            <MainPageView items={items} isload={load}/>
        </>
    )
}

export default WithCoffeeService()(MainPage);