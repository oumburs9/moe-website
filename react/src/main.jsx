import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom';
import { Slider } from './views/slider/Slider';
import Navbar from './views/navigations/header';
import TopNavBar from './views/navigations/top-navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
