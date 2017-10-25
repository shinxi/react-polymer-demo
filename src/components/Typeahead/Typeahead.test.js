import React from 'react';
import { shallow } from 'enzyme';
import Typeahead from './index';

describe('Typeahead', () => {
  it('should render px-typeahead correctly', () => {
    const wrapper = shallow(<Typeahead />);
    expect(wrapper.find('withReactWrapper(px-typeahead)').length).toBe(1);
  });
});
