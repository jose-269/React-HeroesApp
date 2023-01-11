import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { AppRouter } from './routes/AppRouter';
import { Navbar } from './ui';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <AppRouter/>
  </React.StrictMode>,
)
