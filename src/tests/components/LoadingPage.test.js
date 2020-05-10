import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from '../../components/LoadingPage'


test('should run loading page component', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})