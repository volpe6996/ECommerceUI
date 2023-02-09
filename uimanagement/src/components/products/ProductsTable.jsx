import ProductsTableRow from "./ProductsTableRow";

const ProductsTable = ({ productsList }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category name</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                { productsList.map(x => <ProductsTableRow key={x.id} id={x.id} categoryName={x.categoryName} name={x.name} description={x.description}/>) }
            </tbody>
        </table>
    )

}
 
export default ProductsTable;