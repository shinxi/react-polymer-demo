import React from 'react';
import { shallow } from 'enzyme';
import Popover from './index';

describe('Popover', () => {
  it('should render px-popover correctly', () => {
    const wrapper = shallow(<Popover />);
    expect(wrapper.find('withReactWrapper(px-popover)').length).toBe(1);
  });
});
