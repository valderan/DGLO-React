import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import OurCoffeePageView from '../OurCoffeePageView';

const setup = props => {
  const component = shallow(
    <OurCoffeePageView {...props}/>
  )
  return {
      component: component
  }
}

const setupMount = props => {
  const component = mount(
    <OurCoffeePageView {...props}/>
  )
  return {
      component: component
  }
}


describe('Testing <OurCoffeePageView />', () => {
  
  const { defaultProps, errorProps } = prepare();
  
  it('urCoffeePageView rendered correctly', () => {
    const coffePage = shallow(<OurCoffeePageView {...defaultProps}/>);
    expect(shallowToJson(coffePage)).toMatchSnapshot();
  });
  
  describe('Check props', () => {
     
    const { component } = setup({...defaultProps});
    
    it('Check: "items" defined', () => {
      expect(component.instance().props.items).toBeDefined()
    })

    it('Check: "items" array', () => {
      expect(component.instance().props.items).toBeArray();
    })
    
    
    it('Check: "isLoad" defined', () => {
      expect(component.instance().props.isLoad).toBeDefined()
    })

    it('Check: "isLoad" boolean(false)', () => {
      expect(component.instance().props.isLoad).toBeFalse();
    })

    it('Check: "error" defined', () => {
      expect(component.instance().props.error).toBeDefined()
    })

    it('Check: "error" boolean(false)', () => {
      expect(component.instance().props.error).toBeFalse();
    })
        
    it('Check: "errorString" defined', () => {
      expect(component.instance().props.errorString).toBeDefined()
    })

    it('Check: "countryFilter" defined', () => {
      expect(component.instance().props.countryFilter).toBeDefined()
    })

    it('Check: "countryFilter" function', () => {
      expect(component.instance().props.countryFilter).toBeFunction();
    })

    it('Check: "searchFilter" defined', () => {
      expect(component.instance().props.searchFilter).toBeDefined()
    })

    it('Check: "searchFilter" function', () => {
      expect(component.instance().props.searchFilter).toBeFunction();
    })

  })

  describe('Check error', () => {

    const { component } = setup({...errorProps});

    it('Check: "error" boolean(true)', () => {
      expect(component.instance().props.error).toBeTrue();
    })
      
    it('Check: "errorString" defined', () => {
      expect(component.instance().props.errorString).toEqual('Test Error')
    })

  })

})


function prepare() {
    const searchFilter = (param) => { return param };
    const countryFilter = (param) => { return param };
    const errorString = ''
    const error = false;
    const isLoad = false;
    const items = [
    {
      "name": "Death Wish Bean",
      "country": "Brazil",
      "url": "https://images-na.ssl-images-amazon.com/images/I/91DlZZBjxzL._SX522_.jpg",
      "price": "12.99$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    },
    {
      "name": "AROMISTICO Coffee 1 kg",
      "country": "Brazil",
      "url": "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
      "price": "6.99$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    },
    {
      "name": "Solimo Coffee Beans 2 kg",
      "country": "Kenya",
      "url": "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
      "price": "10.73$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    },
    {
      "name": "Black Rifle Coffee",
      "country": "Kenya",
      "url": "https://images-na.ssl-images-amazon.com/images/I/91vwF6Kh8IL._SX522_.jpg",
      "price": "19.75$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    },
    {
      "name": "Presto Coffee Beans 1 kg",
      "country": "Columbia",
      "url": "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
      "price": "15.99$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    },
    {
      "name": "Organic Coffee One Cup",
      "country": "Columbia",
      "url": "https://images-na.ssl-images-amazon.com/images/I/51M2fmEXTIL.jpg",
      "price": "24.99$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    }
  ];


  const defaultProps = {
    items,
    isLoad,
    error,
    errorString,
    searchFilter,
    countryFilter
  }

  const errorProps = {
    ...defaultProps,
    error: true,
    errorString: 'Test Error'  
  }

  return {
    defaultProps,
    errorProps 
  }

}