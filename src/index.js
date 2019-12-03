import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import ErrorBoundry from './components/Error-boundry';
import CoffeeService from './services/coffee-service';
import CoffeeServiceContext from './components/Coffee-service-context/';

import './index.css';
import './index.sass';

const coffeeService = new CoffeeService();

ReactDOM.render(
    <ErrorBoundry>
        <CoffeeServiceContext.Provider value={coffeeService}>
            <Router>
                <App />
            </Router>
        </CoffeeServiceContext.Provider>
    </ErrorBoundry>
    , document.getElementById('root'));

