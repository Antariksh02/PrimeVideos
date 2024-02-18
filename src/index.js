import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Provider } from 'react-redux';
import Nav from './Nav';
import Store from './Redux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
<Nav/>
  </Provider>



);
