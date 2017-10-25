import React from 'react';
import { shallow } from 'enzyme';
import {{reactClassName}} from './index';

describe('{{reactClassName}}', () => {
  it('should render {{tagname}} correctly', () => {
    const wrapper = shallow(<{{reactClassName}} />);
    expect(wrapper.find('withReactWrapper({{tagname}})').length).toBe(1);
  });
});
