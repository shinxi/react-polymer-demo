import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './index';

describe('Dropdown', () => {
  it('should render px-dropdown correctly', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.find('withReactWrapper(px-dropdown)').length).toBe(1);
  });
});
