import React from 'react';
import { shallow } from 'enzyme';
import VisSpark from './index';

describe('VisSpark', () => {
  it('should render px-vis-spark correctly', () => {
    const wrapper = shallow(<VisSpark />);
    expect(wrapper.find('withReactWrapper(px-vis-spark)').length).toBe(1);
  });
});
