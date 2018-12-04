import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { SignupForm } from '../../app/components/SignupForm';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const signupData = {
  input: {
    fullname: 'hammede',
    email: 'ass@jwjjw.com',
    username: 'hnobi',
    password: 'Hnonie23'
  }
};
test('renders Signupnt without crashing', () => {
  const wrapper = shallow(
    <SignupForm
      signupData={signupData}
      handleUserSignup={() => jest.fn()}
      saveInput={() => jest.fn()}
    />
  );
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value: 'fullname' }
    });
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value: 'email' }
    });
  wrapper
    .find('input')
    .at(2)
    .simulate('change', {
      target: { value: 'username' }
    });
  wrapper
    .find('input')
    .at(3)
    .simulate('change', {
      target: { value: 'password' }
    });
  const form = wrapper.find('form');
  form.simulate('submit', {
    preventDefault: jest.fn()
  });
  expect(wrapper).toMatchSnapshot();
});
test('renders SignupForm component without crashing', () => {
  const store = mockStore({ signupData });

  shallow(
    <SignupForm
      store={store}
      signupData={signupData}
      handleUserSignup={() => jest.fn()}
      saveInput={() => jest.fn()}
    />
  );
});
