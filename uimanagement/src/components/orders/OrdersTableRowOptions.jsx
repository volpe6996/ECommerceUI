import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const OrdersTableRowOptions = () => {
    return (  
        <Form className="d-flex justify-content-center">
            <Button variant="primary" className="me-2">EDIT</Button>
        </Form>  
    );
}
 
export default OrdersTableRowOptions;