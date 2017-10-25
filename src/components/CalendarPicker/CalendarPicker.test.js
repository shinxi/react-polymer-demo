import React from 'react';
import { shallow } from 'enzyme';
import CalendarPicker from './index';

describe('CalendarPicker', () => {
  it('should render px-calendar-picker correctly', () => {
    const wrapper = shallow(<CalendarPicker />);
    expect(wrapper.find('withReactWrapper(px-calendar-picker)').length).toBe(1);
  });
});
