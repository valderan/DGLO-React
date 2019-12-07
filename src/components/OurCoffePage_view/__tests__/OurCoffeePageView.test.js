import React from 'react';
import {shallow} from 'enzyme';

import OurCoffeePageView from '../OurCoffeePageView';
import { defaultProps } from './prepareData';

describe('Testing <OurCoffeePageView />', () => {
  
  const coffePage = shallow(<OurCoffeePageView {...defaultProps}/>);

  it('urCoffeePageView rendered correctly', () => {
    expect(coffePage).toMatchSnapshot();
  });

  it('Check prop [items]', () => {
    expect(coffePage.prop('items')).toBeArray();
  })

})