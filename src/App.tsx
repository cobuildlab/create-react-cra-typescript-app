import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import './shared/css/App.css';

/**
 * @returns {JSX.Element} - Main app component.
 */
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
