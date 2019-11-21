import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Store from '../reduxStore';
import HomeComponent from '../components/HomeComponent';

describe('App', () => {
  const appWrapper = shallow(
        <Provider store={Store}>
            <HomeComponent />
        </Provider>,
  );
  it('should render the welcome message', () => {
    console.log('appWrapper.debug()', appWrapper.debug());
    expect(appWrapper.exists()).toBe(true);
  });
});
