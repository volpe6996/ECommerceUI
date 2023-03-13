import ProductsTableRow from "./ProductsTableRow";
import Table from 'react-bootstrap/Table';

const ProductsTable = ({ productsList }) => {

    return (
        <Table style={{maxWidth: 100 + 'vw'}} striped bordered hover responsive className="m-0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th className="col-md-7">Description</th>
                    <th>Category name</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                { productsList.map(x => <ProductsTableRow key={x.id} id={x.id} categoryName={x.categoryName} name={x.name} description={x.description}/>) }
            </tbody>
        </Table>
    )

}
 
export default ProductsTable;