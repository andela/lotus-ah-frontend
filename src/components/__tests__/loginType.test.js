// react libraries
import React from 'react';

// enzyme third party libraries
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// component
import LoginType from '../login/LoginType';

Enzyme.configure({ adapter: new Adapter() });

describe('LoginType Component', () => {
  test('renders the LoginType Component', () => {
    const wrapper = shallow(
          <LoginType 
            className=''
            loginTypeName=''
            href=''
          />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
