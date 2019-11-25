import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import Store from './reduxStore';
import Routes from './Routes';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}

export default App;
