import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import SearchForm from 'search/containers/SearchForm';

import Button from '@material-ui/core/Button';

configure({ adapter: new Adapter() });

function setup() {
   const props = {
      id: 'id',
      label: 'label',
      buttonLabel: 'buttonLabel',
      onClick: jest.fn()
   }

   const wrapper = shallow(<SearchForm {...props} />)

   return {
      props,
      wrapper
   }
}

describe('<SearchForm />', () => {
   it('handles click on empty', () => {
      const { wrapper, props } = setup();
      const button = wrapper.find(Button)
      button.props().onClick('')
      expect(props.onClick.mock.calls.length).toBe(1)
   }),

   it('handles click', () => {
      const { wrapper, props } = setup();
      const button = wrapper.find(Button)
      button.props().onClick('abc')
      expect(props.onClick.mock.calls.length).toBe(1)
   })
})
