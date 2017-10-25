import React from 'react';
import { shallow } from 'enzyme';
import Tile from './index';

describe('Tile', () => {
  it('should render px-tile correctly', () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper.find('withReactWrapper(px-tile)').length).toBe(1);
  });
});
