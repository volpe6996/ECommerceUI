import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UsersTableRowOptions = () => {
    return (  
        <Form>
            <Button variant="primary" className="me-2">EDIT</Button>
            <Button variant="success">SHOW PRODUCTS</Button>
        </Form>  
    );
}
 
export default UsersTableRowOptions;