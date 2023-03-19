import CategoryTable from "./CategoryTable";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/category&product.css';

const arr = [   
    { id: 0, categoryName: 'AGD małe'}, 
    { id: 1, categoryName: 'AGD duże'}, 
    { id: 2, categoryName: 'Komputery'},
    { id: 3, categoryName: 'Laptopy'}, 
    { id: 4, categoryName: 'Urządzenia peryferyjne'}, 
    { id: 5, categoryName: 'Smartphony i smartwatche'},
    { id: 6, categoryName: 'Sprzęt audio'},
    { id: 7, categoryName: 'Narkotyki i olkohole'},
    { id: 0, categoryName: 'AGD małe'}, 
    { id: 1, categoryName: 'AGD duże'}, 
    { id: 2, categoryName: 'Komputery'},
    { id: 3, categoryName: 'Laptopy'}, 
    { id: 4, categoryName: 'Urządzenia peryferyjne'}, 
    { id: 5, categoryName: 'Smartphony i smartwatche'},
    { id: 6, categoryName: 'Sprzęt audio'},
    { id: 7, categoryName: 'Narkotyki i olkohole'},
    { id: 0, categoryName: 'AGD małe'}, 
    { id: 1, categoryName: 'AGD duże'}, 
    { id: 2, categoryName: 'Komputery'},
    { id: 3, categoryName: 'Laptopy'}, 
    { id: 4, categoryName: 'Urządzenia peryferyjne'}, 
    { id: 5, categoryName: 'Smartphony i smartwatche'},
    { id: 6, categoryName: 'Sprzęt audio'},
    { id: 7, categoryName: 'Narkotyki i olkohole'},
    { id: 0, categoryName: 'AGD małe'}, 
    { id: 1, categoryName: 'AGD duże'}, 
    { id: 2, categoryName: 'Komputery'},
    { id: 3, categoryName: 'Laptopy'}, 
    { id: 4, categoryName: 'Urządzenia peryferyjne'}, 
    { id: 5, categoryName: 'Smartphony i smartwatche'},
    { id: 6, categoryName: 'Sprzęt audio'},
    { id: 7, categoryName: 'Narkotyki i olkohole'},
];

const SearchableCategoryTable = () => {
    return ( 
        <div className="searchableCategoryTable">
            <div className="searchBar sticky-top p-2">
                <div class="input-group w-25">
                    <Form.Control type="text" className="form-control me-2 rounded" placeholder="Search for Categories"/>
                    <Button variant="outline-secondary" className="rounded me-2" type="button">Fetch</Button>
                    <Button variant="outline-success" className="rounded" type="button">Add new Category</Button>
                </div>
            </div>
            <CategoryTable categoryList={arr} />
        </div>
    );
}
 
export default SearchableCategoryTable;