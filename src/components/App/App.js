import React from 'react';
import { Route, Switch} from 'react-router-dom';

import { MainPage, OurCoffeePage, PleasurePage, ContactPage, ProductPage, PageNotFound } from '../pages';
import './App.css';


function App() {
  return (
    <>
      <Switch>
        
        <Route path='/' exact component={MainPage} />  
        <Route path='/ourcoffee' exact component={OurCoffeePage} />
        <Route path='/pleasure' exact component={PleasurePage} />
        <Route path='/contact' exact component={ContactPage} />
        <Route path ='/product/:id' render={
                            ({ match }) => {
                                const { id } = match.params;
                                return <ProductPage productId={id}/>
                            }
                } />
        <Route path="*" component={PageNotFound}/>
      </Switch>
    
    </>
  );
}

export default App;
