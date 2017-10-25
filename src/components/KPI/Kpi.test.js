import React from 'react';
import { shallow } from 'enzyme';
import Kpi from './index';

describe('Kpi', () => {
  it('should render px-kpi correctly', () => {
    const wrapper = shallow(<Kpi />);
    expect(wrapper.find('withReactWrapper(px-kpi)').length).toBe(1);
  });
});
