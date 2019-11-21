import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import Store from './reduxStore';
import AppComponent from './components/AppComponent';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


function App() {
  return (
    <Provider store={Store}>
      <AppComponent />
    </Provider>
  );
}

export default App;
