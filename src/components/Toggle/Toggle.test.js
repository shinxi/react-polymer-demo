import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './index';

describe('Toggle', () => {
  it('should render px-toggle correctly', () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper.find('withReactWrapper(px-toggle)').length).toBe(1);
  });
});
