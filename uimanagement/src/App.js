import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import CategoryTable from './components/categories/CategoryTable';
import SearchableCategoryTable from './components/categories/SearchableCategoryTable';
import SearchableProductsTable from './components/products/SearchableProductsTable';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="container-fluid">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap');
      </style>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
