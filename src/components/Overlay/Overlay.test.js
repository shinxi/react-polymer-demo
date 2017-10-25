import React from 'react';
import { shallow } from 'enzyme';
import Overlay from './index';

describe('Overlay', () => {
  it('should render px-overlay correctly', () => {
    const wrapper = shallow(<Overlay />);
    expect(wrapper.find('withReactWrapper(px-overlay)').length).toBe(1);
  });
});
