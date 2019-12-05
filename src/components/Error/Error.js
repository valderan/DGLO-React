
import React from 'react';

import './error.sass';
import errorPic from './error-stamp.jpg';

const Error = () => {
    return(
        <div className="error">
            <img src={errorPic} alt="error!" />
            <p>Братан... Что-то пошло не так!</p>
        </div>
    ) 
}

export default Error;