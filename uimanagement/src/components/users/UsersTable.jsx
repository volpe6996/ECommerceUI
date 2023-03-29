import Table from 'react-bootstrap/Table';
import UsersTableRow from './UsersTableRow';

const UsersTable = ({usersList}) => {
    return (  
        <Table style={{maxWidth: 100 + 'vw'}} striped bordered hover responsive className="m-0">
            <thead>
                <tr>
                    <th className="col-md-1">ID</th>
                    <th className="col-md-4">E-mail</th>
                    <th className="col-md-4">Role</th>
                    <th className='col-md-3'>Options</th>
                </tr>
            </thead>
            <tbody>
                { usersList.map(x => <UsersTableRow key={x.id} id={x.id} email={x.email} role={x.role}/>) }
            </tbody>
        </Table>
    );
}
 
export default UsersTable;