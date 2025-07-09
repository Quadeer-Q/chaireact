import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route,RouterProvider ,createBrowserRouter,createRoutesFromElements } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
const router= createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
