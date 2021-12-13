import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Logo from '../Logo'

test('Logo', () => {
  const wrapper = shallow(<Logo />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
