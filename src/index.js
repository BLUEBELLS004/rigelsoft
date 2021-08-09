import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Appp from './Appp';
import Head from './header';
import Foot from './footer';
import Click from './click';
import Data1 from './data1';
import Pri from './data3';
import App1 from './app1';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Head/>
    <Pri/>
    <Appp/> 
    <App/>
    <Data1/>
    
    <App1/>
    <Click/>
    <Foot/>

    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
