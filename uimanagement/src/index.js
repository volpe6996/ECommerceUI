import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './layout components/Header';
import SearchableCategoryTable from './components/categories/SearchableCategoryTable';
import SearchableProductsTable from './components/products/SearchableProductsTable';
import Footer from './layout components/Footer';
import ErrorPage from './ErrorPage';
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <RootLayout/>
    </>,
    errorElement: <ErrorPage />,
    children: [
      {path: '/categories', element: <SearchableCategoryTable/>},
      {path: '/products', element: <SearchableProductsTable/>},
      {path: '/orders', element: <></>},
      {path: '/users', element: <></>},
      {path: '/adminPanel', element: <></>},
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);