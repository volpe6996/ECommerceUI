import UsersTableRowOptions from "./UsersTableRowOptions";

const UsersTableRow = ({id, email, role}) => {
    return (  
        <tr>
        <td>{id}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td><UsersTableRowOptions/></td>
    </tr>
    );
}
 
export default UsersTableRow;