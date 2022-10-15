import React from 'react';
import ReactDOM from 'react-dom/client';

import 'antd/dist/antd.css';
import './styles/styles.scss';



import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

