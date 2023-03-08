import CategoryTable from "./CategoryTable";

const arr = [   
    { id: 0, categoryName: 'AGD małe'}, 
    { id: 1, categoryName: 'AGD duże'}, 
    { id: 2, categoryName: 'Komputery'},
    { id: 3, categoryName: 'Laptopy'}, 
    { id: 4, categoryName: 'Urządzenia peryferyjne'}, 
    { id: 5, categoryName: 'Smartphony i smartwatche'},
    { id: 6, categoryName: 'Sprzęt audio'},
];

const SearchableCategoryTable = () => {
    return (  
        <div className="searchableCategoryTable">
            <div className="searchable d-flex justify-content-start">
            <div class="input-group mb-3 w-25 pt-1">
                <input type="text" class="form-control me-2 rounded" placeholder="Search for Categories"/>
                <button class="btn btn-outline-secondary rounded" type="button" id="button-addon2">Fetch</button>
            </div>
            </div>
            <CategoryTable categoryList={arr} />
        </div>
    );
}
 
export default SearchableCategoryTable;