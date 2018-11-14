// react  libraries
import React from 'react';

// third-party libraries
import { Provider } from 'react-redux';

// enzyme third party libraries
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// component
import ForgotPassword from '../ForgotPassword/ForgotPassword';

// store
import configureStore from '../../store/configureStore';

Enzyme.configure({ adapter: new Adapter() });

describe('Login Component', () => {
  test('renders the Login Component', () => {
    const store = configureStore();
    const wrapper = shallow(
        <Provider store={store}>
          <ForgotPassword />
        </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
