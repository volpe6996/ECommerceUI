import OrdersTable from './OrdersTable';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/category&product.css'

const arr = [{id: 1, date: "01-01-2023", status: "Ordered"}, {id: 1, date: "01-01-2023", status: "Ordered"}, {id: 1, date: "01-01-2023", status: "Ordered"}, ]

const SearchableOrdersTable = () => {
    return (  
        <div className="searchableOrdersTable">
            <div className="searchBar sticky-top p-2">
                <div class="input-group w-50">
                    <Form.Control type="text" className="form-control me-2 rounded" placeholder="Search for Orders"/>
                    <Button variant="outline-secondary" className="rounded me-2" type="button">Fetch</Button>
                    <Button variant="outline-success" className="rounded" type="button">Add new Category</Button>
                </div>
            </div>
            <OrdersTable ordersList={arr} />
        </div>
    );
}
 
export default SearchableOrdersTable;