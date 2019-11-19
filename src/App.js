import React from 'react';
<<<<<<< HEAD
import './App.css';
import { Provider } from 'react-redux';
import Store from './reduxStore';
import HomeComponent from './components/homeComponent';
=======
import logo from './zoom.png';
import './App.scss';
>>>>>>> Chore(Sass): add sass preprocessor

function App() {
  return (
    <Provider store={Store} >
      <HomeComponent />
    </Provider>
  );
}

export default App;
