import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

function UsersRecord()
{
    const [users,setUsers] = useState([])
    var LINK_ = `https://reqres.in/api/users?page=2`;
    useState(() => {
        axios.get(LINK_)
        .then(res=> {
            setUsers(res.data.data) 
        })
        .catch(err => {
            console.log(err)
        },[])   //There is an infinite loop for the data fetching, inorder to make the data fetched only once we passed empth list
    })

    return (
        <div>
            <ul>
                {
                    users.map(user=> 
                    <li key={user.id}> 
                        {user.first_name} 
                        {user.last_name} 
                        <Link to={`/users/${user.id}`}> 
                            <a>View Profile</a> 
                        </Link>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

export default UsersRecord