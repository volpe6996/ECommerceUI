import ProductsTable from "./ProductsTable";

const arr = [   
    { id: 0, name: 'Auto', description: 'Szybkie bo czerwone', categoryName: 'a'}, 
    { id: 1, name: 'Jabłko', description: 'Dobre bo kaszubskie', categoryName: 'b'}, 
    { id: 2, name: 'Ołówek', description: 'Za darmo bo z Castoramy', categoryName: 'c'}, 
];

const SearchableProductsTable = () => {
    return (  
        <div className="searchableCategoryTable">
            <div className="searchable d-flex justify-content-start">
            <div class="input-group mb-3 w-25 p-1">
                <input type="text" class="form-control me-2 rounded" placeholder="Search"/>
                <button class="btn btn-outline-secondary rounded" type="button" id="button-addon2">Fetch</button>
            </div>
            </div>
            <ProductsTable productsList={arr} />
        </div>
    );
}
 
export default SearchableProductsTable;