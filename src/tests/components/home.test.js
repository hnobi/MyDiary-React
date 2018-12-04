import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../app/components/home';

test('renders Home component without crashing', () => {
  shallow(<Home />);
});
