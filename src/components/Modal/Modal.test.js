import React from 'react';
import { shallow } from 'enzyme';
import Modal from './index';

describe('Modal', () => {
  it('should render px-modal correctly', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find('withReactWrapper(px-modal)').length).toBe(1);
  });
});
