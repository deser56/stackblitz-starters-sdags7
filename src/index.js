import React, { StrictMode, ErrorBoundary } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import ErrorSuppressor from './ErrorSuppressor';


import App from './App';

ReactDOM.render(
  <ErrorSuppressor>
    <App />
  </ErrorSuppressor>,
  document.getElementById('root')
);