import CategoryTableRowOptions from "./CategoryTableRowOptions";

const CategoryTableRow = ({ id, categoryName, isActive}) => {
    return (  
        <tr>
            <td>{id}</td>
            <td>{categoryName}</td>
            <td>
                <input type="checkbox" checked={isActive} readOnly="true" />
            </td>
            <td><CategoryTableRowOptions/></td>
        </tr>
    );
}
 
export default CategoryTableRow;