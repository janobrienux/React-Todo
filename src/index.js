import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import Clock from './components/Clock';


ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* <Clock/> */}
  </React.StrictMode>,
  
  document.getElementById('root')
);


