import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Header';
import SearchableCategoryTable from './components/categories/SearchableCategoryTable';
import SearchableProductsTable from './components/products/SearchableProductsTable';
import Footer from './Footer';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header/>
      <Footer/>
    </>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/categories",
    element: <>
      <Header/>
      <SearchableCategoryTable/>
      <Footer/>
    </>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <>
      <Header/>
      <SearchableProductsTable/>
      <Footer/>
    </>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/orders",
    element: <>
      <Header/>
      <Footer/>
    </>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <>
      <Header/>
      <Footer/>
    </>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/adminPanel",
    element: <>
      <Header/>
      <Footer/>
    </>,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
