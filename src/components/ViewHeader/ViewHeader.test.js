import React from 'react';
import { shallow } from 'enzyme';
import ViewHeader from './index';

describe('ViewHeader', () => {
  it('should render px-view-header correctly', () => {
    const wrapper = shallow(<ViewHeader />);
    expect(wrapper.find('withReactWrapper(px-view-header)').length).toBe(1);
  });
});
