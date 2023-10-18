import './App.css';
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, } from "react-router-dom";
import SearchableCategoryTable from './components/categories/SearchableCategoryTable';
import SearchableProductsTable from './components/products/SearchableProductsTable';
import Footer from './layout components/Footer';
import ErrorPage from './components/ErrorPage';
import RootLayout from './pages/RootLayout';
import LogIn from './components/LogIn';
import StartPage from './pages/StartPage'
import SearchableOrdersTable from './components/orders/SearchableOrdersTable';
import SearchableUsersTable from './components/users/SearchableUsersTable';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' errorElement={<ErrorPage/>}>
        <Route path='' element={<RootLayout/>}>
          <Route index element={<LogIn/>}/>
        </Route>

        <Route path='/start' element={<RootLayout/>}>
          <Route index element={<StartPage/>}/>
        </Route>

        <Route path='/categories' element={<RootLayout/>}>
          <Route index element={<SearchableCategoryTable/>}/>
        </Route>

        <Route path='/products' element={<RootLayout/>}>
          <Route index element={<SearchableProductsTable/>}/>
        </Route>

        <Route path='/orders' element={<RootLayout/>}>
          <Route index element={<SearchableOrdersTable/>}/>
        </Route>

        <Route path='/users' element={<RootLayout/>}>
          <Route index element={<SearchableUsersTable/>}/>
        </Route>

      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
