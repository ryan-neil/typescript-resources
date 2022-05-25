import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ItemProvider from './context/ItemContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </React.StrictMode>
);
