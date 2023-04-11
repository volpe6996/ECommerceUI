import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/globals.css';
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import LogInPage from "./pages/LogInPage";
import ProductHardcoded from "./components/ProductHardcoded";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' errorElement={<ErrorPage/>}>
        
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/categories' element={<Categories/>}/>
        </Route>
        
        <Route index path='/login' element={<LogInPage/>}/>
        <Route element={<RootLayout/>}>
          <Route path='/products/categories/processors/1' element={<ProductHardcoded/>}/>
        </Route>
      </Route>
  ));

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
