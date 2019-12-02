import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainPage } from '../pages';
import './App.css';


function App() {
  return (
    <>
      <Switch>
        
        <Route path='/' exact component={MainPage} />  
      
      </Switch>
    
    </>
  );
}

export default App;
