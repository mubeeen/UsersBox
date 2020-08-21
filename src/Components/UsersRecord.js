import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';


function UsersRecord(prop)
{
    var arr = [];
    const [users,setUsers] = useState([])
    var LINK_ = `https://reqres.in/api/users?page=${prop.prop}`;
    useState(() => {
        axios.get(LINK_)
        .then(res=> {
            arr = res.data.data.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
            setUsers(arr) 
        })
        .catch(err => {
            console.log(err)
        },[])   //There is an infinite loop for the data fetching, inorder to make the data fetched only once we passed empth list
    })
    


    return (
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Profile</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>(
                        <React.Fragment>
                            <tr>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>
                                <Link to={`/users/${user.id}`}> 
                                        <a className="aTagLink">View Profile</a> 
                                </Link>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))
                }
            </tbody>
        </Table>         
    </div>
    )
}

export default UsersRecord