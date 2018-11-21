// React Libraries
import React from 'react';
import { Provider } from 'react-redux';

// third-party libraries
import { shallow } from 'enzyme';

// modules importation
import Profile from '../Profile';
import configureStore from '../../../store/configureStore';

describe('Login Component', () => {
  test('renders the Login Component', () => {
    const store = configureStore();
    const wrapper = shallow(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
