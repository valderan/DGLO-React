import React from 'react';
import {shallow} from 'enzyme';

import OurCoffeePageView from '../OurCoffeePageView';

describe('Testing <OurCoffeePageView />', () => {
  
  it('urCoffeePageView rendered correctly', () => {
    const coffePage = shallow(<OurCoffeePageView items={[]}/>);
    expect(coffePage).toMatchSnapshot();
  });


  // items, isLoad, countryFilter, searchFilter, error, errorString
  it('Check prop [items]', () => {
    const props = {
      items:[], 
      isLoad: true,
      countryFilter: ()=>{},
      searchFilter: ()=>{},
      error:false,
      errorString: '' 
    }

    const wrapper = shallow(<OurCoffeePageView {...props}/>);
    expect(wrapper.prop('items')).toBeArray();
  
  })

})