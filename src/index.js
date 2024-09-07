import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import {Firebase} from './Firebase/config';
import Context from './store/FirebaseContext';



ReactDOM.render(
  <FirebaseContext.Provider value={ Firebase}>
    <Context>
    <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

