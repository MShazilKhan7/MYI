import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-solid-svg-icons';
import { fab, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import App from './App.tsx'
import "./style.scss";

const rootElement = document.getElementById('root');
library.add(fab, faInstagram, faGoogle);

ReactDOM.createRoot(rootElement ?? document.createElement('div')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);