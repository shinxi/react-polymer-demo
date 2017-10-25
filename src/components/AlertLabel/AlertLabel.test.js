import React from 'react';
import { shallow } from 'enzyme';
import AlertLabel from './index';

describe('AlertLabel', () => {
  it('should render px-alert-label correctly', () => {
    const wrapper = shallow(<AlertLabel />);
    expect(wrapper.find('withReactWrapper(px-alert-label)').length).toBe(1);
  });
});
