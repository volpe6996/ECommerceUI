import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import CategoryTable from './components/categories/CategoryTable';
import SearchableCategoryTable from './components/categories/SearchableCategoryTable';

function App() {
  return (
    <div className="App">
      <SearchableCategoryTable/>
    </div>
  );
}

export default App;
