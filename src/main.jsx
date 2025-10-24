import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About Us/About.jsx';
import Shop from './pages/shop/Shop.jsx';
import Login from './pages/Login/Login.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Home from './pages/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './pages/Products/Product.jsx';
import Layout from './pages/Layout/Layout.jsx';
import StoreContextProvider from './context/StoreContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (

        <App />

    ),
  },
  {
    path: "/about-us",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/shop",
    element: (
      <Layout>
        <Shop />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },

  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/home",
    element: (
 
        <Home />
  
    ),
  },
  {
    path: "/product/:id",
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
       
      </Layout>
    ),
  },

]);
createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
    <RouterProvider router={router} />
  </StoreContextProvider>


)
