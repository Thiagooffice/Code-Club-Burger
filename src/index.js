import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle'
import Routers from './routes'


ReactDOM.render(
  <React.StrictMode>
    <Routers/>
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);


