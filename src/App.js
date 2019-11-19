import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './reduxStore';
import HomeComponent from './components/homeComponent';

function App() {
  return (
    <Provider store={Store} >
      <HomeComponent />
    </Provider>
  );
}

export default App;
