import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './index';

describe('ProgressBar', () => {
  it('should render px-progress-bar correctly', () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper.find('withReactWrapper(px-progress-bar)').length).toBe(1);
  });
});
