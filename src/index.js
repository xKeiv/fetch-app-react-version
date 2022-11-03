import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/pages/Main';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';
import Character from './components/pages/Character'


const router = Router([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/character",
    element: <Character />,
  },
  {
    path: "/character/",
    element: <Character />,
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
