import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


function Disp () {
  try {
  // Your code here that may cause the BigInt to number conversion error
  return (<App />);
} catch (error) {
  if (error instanceof TypeError && error.message.includes('Cannot convert a BigInt value to a number')) {
    // Handle the specific error gracefully
    console.error('Error: Cannot convert a BigInt value to a number. Please check your code for any potential BigInt to number conversions.');
  } else {
    // Handle other errors
    console.error('An error occurred:', error);
  }
}
}

root.render(
  <StrictMode>
    <Disp />
  </StrictMode>
);
