import CategoryTable from "./CategoryTable";

const arr = [   
    { id: 0, categoryName: 'a', isActive: true }, 
    { id: 1, categoryName: 'b', isActive: false }, 
    { id: 2, categoryName: 'c', isActive: true }, 
];

const SearchableCategoryTable = () => {
    return (  
        <div className="searchableCategoryTable">
            <div className="searchable d-flex justify-content-start">
                <input type="text"></input>
                <label for="isActive" class="form-label">Show only active</label>
                <input id="isActive" type="checkbox"></input>
                <button>Refresh</button>
            </div>
            <CategoryTable categoryList={arr} />
        </div>
    );
}
 
export default SearchableCategoryTable;