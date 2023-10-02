import './styles.css'
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import AppRouter from './Router';

const domNode = document.getElementById('root');
const root = createRoot(domNode!);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
