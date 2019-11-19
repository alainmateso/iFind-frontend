import React from 'react';
import { Provider } from 'react-redux';
import Store from '../../src/reduxStore';
import HomeComponent from '../components/homeComponent';
import { shallow } from 'enzyme';
import App from '../../src/App';

describe('App', () => {
    const appWrapper = shallow(<Provider store={Store} >
        <HomeComponent />
      </Provider>)
    it('should render the welcome message', () =>{
        console.log('appWrapper.debug()', appWrapper.debug())
        expect(appWrapper.exists()).toBe(true);
    });
})
