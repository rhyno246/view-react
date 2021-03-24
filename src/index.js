import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './app/store/store';
import './index.css';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
    <Provider store ={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
