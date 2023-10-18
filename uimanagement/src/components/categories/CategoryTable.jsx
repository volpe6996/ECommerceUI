import CategoryTableRow from "./CategoryTableRow";
import Table from 'react-bootstrap/Table';

const CategoryTable = ({ categoryList }) => {

    return (
        <Table style={{maxWidth: 100 + 'vw'}} striped bordered hover responsive className="m-0">
            <thead>
                <tr>
                    <th className="col-md-1">ID</th>
                    <th className="col-md-8">Category name</th>
                    <th className="col-md-3">Options</th>
                </tr>
            </thead>
            <tbody>
                { categoryList.map(x => <CategoryTableRow key={x.id} id={x.id} categoryName={x.name}/>) }
            </tbody>
        </Table>
    )

}
 
export default CategoryTable;