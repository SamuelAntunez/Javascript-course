import usersStore from '../../store/users-store';
import './render-table.css';

let table;

const createTable = ( ) =>{
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `

    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>

    `
    const tableBody = document.createElement('tbody')
    table.append( tableHeaders, tableBody)

    return table
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) =>{

    const users = usersStore.getUsers();

    if (!table ) {
        table = createTable();
        element.append( table)

        // TODO Listeners
    }

    let tableHTML = '';
    users.forEach( user =>{ 
        tableHTML += `
        <tr>
            <td>#${user.id}</th>
            <td>${user.balance}</th>
            <td>${user.firstName}</th>
            <td>${user.lastName}</th>
            <td>${user.isActive}</th>
            <td>
                <a href='#' data-id=${user.id}> select</a>
                |
                <a href='#' data-id=${user.id}> select</a>

            
            </th>

        </tr>
        
        `
    });

    table.querySelector('tbody').innerHTML = tableHTML
}