// react libraries
import React from 'react';

// enzyme third party libraries
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// component
import LoginTypeSelector from '../login/LoginTypeSelector';

Enzyme.configure({ adapter: new Adapter() });

describe('LoginTypeSelector Component', () => {
  test('renders the LoginTypeSelector Component', () => {
    const wrapper = shallow(
          <LoginTypeSelector 
            onClick={() => {}}
          />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
