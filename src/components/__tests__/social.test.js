// react libraries
import React from 'react';

// enzyme third party libraries
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// component
import SocialSignIn from '../SocialLogin/SocialSignIn';

Enzyme.configure({ adapter: new Adapter() });

describe('SocialSignIn Component', () => {
  test('renders the SocialSignIn Component', () => {
    const wrapper = shallow(
          <SocialSignIn />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
