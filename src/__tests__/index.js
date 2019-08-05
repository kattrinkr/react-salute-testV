import React from 'react';
import { shallow, mount } from 'enzyme';

import ReactSalute from '../lib';

describe('<ReactSalute />', () => {
  it('Check default message', () => {
    const wrapper = shallow(<ReactSalute />);

    expect(wrapper.text()).toBe('Salute React!');
  });

  it('Check message passed through props', () => {
    const name = 'Foo';
    const wrapper = shallow(<ReactSalute name={name} />);

    expect(wrapper.text()).toBe(`Salute ${name}!`);
  });

  it('Check reset props', () => {
    const name = 'Foo';
    const newName = 'Bar';
    const wrapper = mount(<ReactSalute name={name} />);

    expect(wrapper.props().name).toBe(name);
    wrapper.setProps({ name: newName });
    expect(wrapper.props().name).toBe(newName);
  });
});