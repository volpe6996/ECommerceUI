import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import CategoryTable from './components/categories/CategoryTable';
import SearchableCategoryTable from './components/categories/SearchableCategoryTable';
import SearchableProductsTable from './components/products/SearchableProductsTable';

function App() {
  return (
    <div className="App">
      <h2>Podgląd komponentów</h2>
      <SearchableCategoryTable/>
      <SearchableProductsTable/>
    </div>
  );
}

export default App;
