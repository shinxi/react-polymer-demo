import React from 'react';
import { shallow } from 'enzyme';
import BrandingBar from './index';

describe('BrandingBar', () => {
  it('should render px-branding-bar correctly', () => {
    const wrapper = shallow(<BrandingBar />);
    expect(wrapper.find('withReactWrapper(px-branding-bar)').length).toBe(1);
  });
});
