import React from 'react';
import { shallow } from 'enzyme';
import Tree from './index';

describe('Tree', () => {
  it('should render px-tree correctly', () => {
    const wrapper = shallow(<Tree />);
    expect(wrapper.find('withReactWrapper(px-tree)').length).toBe(1);
  });
});
