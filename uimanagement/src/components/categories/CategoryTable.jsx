import CategoryTableRow from "./CategoryTableRow";

const CategoryTable = ({ categoryList }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category name</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                { categoryList.map(x => <CategoryTableRow key={x.id} id={x.id} categoryName={x.categoryName}/>) }
            </tbody>
        </table>
    )

}
 
export default CategoryTable;