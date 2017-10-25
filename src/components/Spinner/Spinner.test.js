import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './index';

describe('Spinner', () => {
  it('should render px-spinner correctly', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find('withReactWrapper(px-spinner)').length).toBe(1);
  });
});
