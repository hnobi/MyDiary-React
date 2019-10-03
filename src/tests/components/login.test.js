import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { LoginForm } from '../../app/components/LoginForm';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const loginData = {
  input: {
    username: 'hnobi',
    password: 'Hnonie23'
  },
  status: 'success'
};
test('renders LoginForm component without crashing', () => {
  const wrapper = shallow(
    <LoginForm
      loginData={loginData}
      handleUserLogin={() => jest.fn()}
      saveInput={() => jest.fn()}
    />
  );

  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value: 'username' }
    });
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value: 'password' }
    });
  const form = wrapper.find('form');
  form.simulate('submit', {
    preventDefault: jest.fn()
  });
  expect(wrapper).toMatchSnapshot();
});
test('renders LoginForm component without crashing', () => {
  const store = mockStore({ loginData });

  shallow(
    <LoginForm
      store={store}
      loginData={loginData}
      handleUserLogin={() => jest.fn()}
      saveInput={() => jest.fn()}
    />
  );
});
