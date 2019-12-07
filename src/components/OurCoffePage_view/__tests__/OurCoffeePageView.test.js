import React from 'react';
import {shallow} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import OurCoffeePageView from '../OurCoffeePageView';
import { defaultProps } from './prepareData';

describe('Testing <OurCoffeePageView />', () => {
  
  it('urCoffeePageView rendered correctly', () => {
    const coffePage = shallow(<OurCoffeePageView {...defaultProps}/>);
    expect(shallowToJson(coffePage)).toMatchSnapshot();
  });

  it('Check prop [items]', () => {
    const coffePage = shallow(<OurCoffeePageView {...defaultProps}/>);
    expect(coffePage.prop('items')).toBeArray();
  })

})