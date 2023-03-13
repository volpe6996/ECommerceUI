import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './layout components/Header';
import SearchableCategoryTable from './components/categories/SearchableCategoryTable';
import SearchableProductsTable from './components/products/SearchableProductsTable';
import Footer from './layout components/Footer';
import ErrorPage from './ErrorPage';
import RootLayout from './routes/RootLayout';
import LogIn from './components/LogIn';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} errorElement={<ErrorPage/>}>
      <Route index element={<h1>NOT YET IMPLEMENTED</h1>}/>
      <Route path='/categories' element={<SearchableCategoryTable/>}/>
      <Route path='/products' element={<SearchableProductsTable/>}/>
      <Route path='/orders' element={<h1>NOT YET IMPLEMENTED</h1>}/>
      <Route path='/users' element={<h1>NOT YET IMPLEMENTED</h1>}/>
      <Route path='/adminPanel' element={<LogIn/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);