import CategoryTable from "./CategoryTable";

const arr = [   
    { id: 0, categoryName: 'a'}, 
    { id: 1, categoryName: 'b'}, 
    { id: 2, categoryName: 'c'}, 
];

const SearchableCategoryTable = () => {
    return (  
        <div className="searchableCategoryTable">
            <div className="searchable d-flex justify-content-start">
            <div class="input-group mb-3 w-25 p-1">
                <input type="text" class="form-control me-2 rounded" placeholder="Search"/>
                <button class="btn btn-outline-secondary rounded" type="button" id="button-addon2">Fetch</button>
            </div>
            </div>
            <CategoryTable categoryList={arr} />
        </div>
    );
}
 
export default SearchableCategoryTable;