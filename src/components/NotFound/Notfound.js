import React from 'react';

import './notfound.sass';
import mainPic from './notfound.png';

function NotFound() {
    return (
        <div className="notfound">
            <img src={mainPic} alt="Not Found"/>
        </div>
    )
}

export default NotFound;