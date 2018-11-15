// React Libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// modules importation
import Home from '../Home';

// SnapShot Test
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home debug />);
    expect(component).toMatchSnapshot();
  });
});
