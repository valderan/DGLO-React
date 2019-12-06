import React, { useState, useEffect } from 'react';
import WithCoffeeService from '../hoc/';
import OurCoffeePageView from '../OurCoffePage_view';

import { DATA_LOADING_ERROR } from '../Error/Error.js'

function OurCoffeePage ({ CoffeeService }) {

    const [ items, setItems ] = useState([]);
    const [ load, isLoad ] = useState(true);
    const [ filter, filterLoad] = useState([]);
    const [ filterStatus, setFilter] = useState(false);
    const [ itemList, setItemList] = useState([]);
    const [ error, setError] = useState(false);
    const [ errorString, setErrorString] = useState('');
   
    useEffect(() => {
        
        if (!load) return;
        
        CoffeeService.getCoffee()
        .then(res => {
            setItems(res);
            setItemList(res);
            isLoad(false)
            setError(false);
        })
        .catch(err => {
            console.error(err);
            setError(true);
            setErrorString(DATA_LOADING_ERROR);
        })

    },[CoffeeService, load]);

    const countryFilter = (country) => {
        const newItems = items.filter( item => item.country === country);
        filterLoad(newItems);
        setFilter(true)
    }

    const searchFilter = (name = '') => {
        setItemList(items);
        let newItems = [];
        if (name.length > 0) {
            newItems = items.filter( item  =>  item.name.toUpperCase().indexOf(name.toUpperCase()) !== -1);
            filterLoad(newItems);
            setFilter(true)
        }   
    }

    useEffect(() => {
        if (filterStatus) {
            setItemList(filter)
        } else {
            setItemList(items)
        }

    },[filterStatus, filter, items])

    return (

        <>
            <OurCoffeePageView 
                items={itemList} 
                isLoad={load} 
                countryFilter={countryFilter} 
                searchFilter={searchFilter}
                error={error}
                errorString={errorString}/>
        </>
    )
}

export default WithCoffeeService()(OurCoffeePage);