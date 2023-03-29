import Table from 'react-bootstrap/Table';
import OrdersTableRow from './OrdersTableRow';

const OrdersTable = ({ordersList}) => {
    return (  
        <Table style={{maxWidth: 100 + 'vw'}} striped bordered hover responsive className="m-0">
            <thead>
                <tr>
                    <th className="col-md-1">ID</th>
                    <th className="col-md-5">Date of Order</th>
                    <th className="col-md-5">Status</th>
                    <th classNAme="col-md-1">Options</th>
                </tr>
            </thead>
            <tbody>
                { ordersList.map(x => <OrdersTableRow key={x.id} id={x.id} dateOfOrder={x.date} status={x.status}/>) }
            </tbody>
        </Table>
    );
}
 
export default OrdersTable;