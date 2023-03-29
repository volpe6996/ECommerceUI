import UsersTable from "./UsersTable";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/category&product.css'

const arr = [{id: 0, email: "dupa@gmail.com", role: "Admin"}, ]

const SearchableUsersTable = () => {
    return (  
        <div className="searchableUsersTable">
            <div className="searchBar sticky-top p-2">
                <div class="input-group w-50">
                    <Form.Control type="text" className="form-control me-2 rounded" placeholder="Search for Users"/>
                    <Button variant="outline-secondary" className="rounded me-2" type="button">Fetch</Button>
                    <Button variant="outline-success" className="rounded" type="button">Add new Category</Button>
                </div>
            </div>
            <UsersTable usersList={arr} />
        </div>
    );
}
 
export default SearchableUsersTable;