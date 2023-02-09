import CategoryTableRow from "./CategoryTableRow";

const CategoryTable = ({ categoryList }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category name</th>
                    <th>Active</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                { categoryList.map(x => <CategoryTableRow key={x.id} id={x.id} categoryName={x.categoryName} isActive={x.isActive}/>) }
            </tbody>
        </table>
    )

}
 
export default CategoryTable;