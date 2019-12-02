import React from 'react';
import CoffeeServiceContext from '../Coffee-service-context';

const WithCoffeeService = () => (Wrapped) => {
    return (props) => {
        return (
            <CoffeeServiceContext.Consumer>
                {
                    (CoffeeService) => {
                        return <Wrapped {...props} CoffeeService={CoffeeService}/>
                    }
                }
            </CoffeeServiceContext.Consumer>
        )
    };
};

export default WithCoffeeService;