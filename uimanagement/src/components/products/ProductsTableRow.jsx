import ProductsTableRowOptions from "./ProductsTableRowOptions";

const ProductsTableRow = ({ id, categoryName, name, description}) => {
    return (  
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{categoryName}</td>
            <td><ProductsTableRowOptions/></td>
        </tr>
    );
}
 
export default ProductsTableRow;