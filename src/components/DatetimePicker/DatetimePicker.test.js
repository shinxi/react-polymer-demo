import React from 'react';
import { shallow } from 'enzyme';
import DatetimePicker from './index';

describe('DatetimePicker', () => {
  it('should render px-datetime-picker correctly', () => {
    const wrapper = shallow(<DatetimePicker />);
    expect(wrapper.find('withReactWrapper(px-datetime-picker)').length).toBe(1);
  });
});
