import React from 'react';
import { shallow } from 'enzyme';
import KeyValuePair from './index';

describe('KeyValuePair', () => {
  it('should render px-key-value-pair correctly', () => {
    const wrapper = shallow(<KeyValuePair />);
    expect(wrapper.find('withReactWrapper(px-key-value-pair)').length).toBe(1);
  });
});
