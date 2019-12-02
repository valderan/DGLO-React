import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from './components/Error-boundry';
import CoffeeService from './services/coffee-service';
import CoffeeServiceContext from './components/Coffee-service-context/';

import './index.css';

ReactDOM.render(
    <ErrorBoundry>
        <CoffeeServiceContext.Provider value={CoffeeService}>
            <Router>
                <App />
            </Router>
        </CoffeeServiceContext.Provider>
    </ErrorBoundry>
    , document.getElementById('root'));

