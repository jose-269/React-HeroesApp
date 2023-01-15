import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { AppRouter } from './routes/AppRouter';
// import { HeroesRoutes } from './routes/AppRouter';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <AppRouter />
  </React.StrictMode>,
)
