import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Ghosts} from './Ghosts/Ghosts';
import {Items} from './Items/Items';
import {Tutorial} from './Tutorial/Tutorial';
import {Contacts} from './Contacts/Contacts'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/tutorial",
    element: <Tutorial />
  },
  {
    path: "/ghosts",
    element: <Ghosts />
  },
  {
    path: "/items",
    element: <Items />
  },
  {
    path: "/contacts",
    element: <Contacts />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
