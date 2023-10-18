import CategoryTable from "./CategoryTable";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/category&product.css';
import UseGetCategories from "../../hooks/CategoriesHooks";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SearchableCategoryTable = () => {
    const nav = useNavigate();
    const[data, setData] = useState([]);

    const handleGetCategoires = () => {
        UseGetCategories().then((res) => {
            if(sessionStorage.length <= 0)
                nav('');
            setData(res);
        }).catch(nav(''));
    };

    useEffect(() => {
        handleGetCategoires();
    }, []);

    return (
        <div className="searchableCategoryTable">
            <div className="searchBar sticky-top p-2">
                <div class="input-group w-50">
                    <Form.Control type="text" className="form-control me-2 rounded" placeholder="Search for Categories"/>
                    <Button variant="outline-secondary" className="rounded me-2" type="button">Fetch</Button>
                    <Button variant="outline-success" className="rounded" type="button">Add new Category</Button>
                </div>
            </div>
            <CategoryTable categoryList={data} />
        </div>
    );
}
 
export default SearchableCategoryTable;