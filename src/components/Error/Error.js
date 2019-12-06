
import React from 'react';

import './error.sass';
import errorPic from './error-stamp.jpg';


export const DATA_LOADING_ERROR = "Ошибка загрузки данных с сервера!";

const Error = ( { errorString = "Братан... Что-то пошло не так!" } ) => {
    return(
        <div className="error">
            <img src={errorPic} alt="error!" />
            <p>{errorString}</p>
        </div>
    ) 
}

export default Error;