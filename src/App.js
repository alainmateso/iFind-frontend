import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import Store from './reduxStore';
import HomeComponent from './components/homeComponent';
import logo from './zoom.png';

function App() {
  return (
    <Provider store={Store}>
      <HomeComponent />
    </Provider>
  );
}

export default App;
