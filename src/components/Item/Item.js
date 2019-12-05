import React from 'react';
import Spinner from '../Spinner';

import './item.sass';

function Item({item, isLoad}) {

    const { name, country = "", url, price } = item;
     
    return(
        <>
             <div className="shop__item">
                {(isLoad) ? <Spinner /> :
                    <>
                        <img src={url} alt="coffee" />
                        <div className="shop__item-title">
                            {name}
                        </div>
                        
                        {
                            (country.length > 0) ? <div className="shop__item-country">{country}</div> : ''
                        }
                        
                        <div className="shop__item-price">{price}</div>
                    </>    
                }
            </div>
        </>
    )
}

export default Item;