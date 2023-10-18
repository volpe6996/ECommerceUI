import OrdersTableRowOptions from "./OrdersTableRowOptions";

const OrdersTableRow = ({id, dateOfOrder, status}) => {
    return (  
        <tr>
        <td>{id}</td>
        <td>{dateOfOrder}</td>
        <td>{status}</td>
        <td><OrdersTableRowOptions/></td>
    </tr>
    );
}
 
export default OrdersTableRow;