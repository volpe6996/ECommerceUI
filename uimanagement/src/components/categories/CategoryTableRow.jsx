import CategoryTableRowOptions from "./CategoryTableRowOptions";

const CategoryTableRow = ({ id, categoryName}) => {
    return (  
        <tr>
            <td>{id}</td>
            <td>{categoryName}</td>
            <td><CategoryTableRowOptions/></td>
        </tr>
    );
}
 
export default CategoryTableRow;