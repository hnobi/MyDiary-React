import React from 'react';
import { shallow } from 'enzyme';

import Alert from '../../app/components/Alert';

test('renders Alert component without crashing', () => {
  const props = { status: 'success', message: '' };

  const wrapper = shallow(<Alert {...props} />);
  expect(wrapper).toMatchSnapshot();
});
