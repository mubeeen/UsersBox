import React from 'react';
import {Link} from 'react-router-dom';

const btn1Style = {
    width:"20%",
    margin:"2px"
  }
function home()
{
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Welcome to User Box</h1>
                <p class="lead">The site contain the dummy data of users</p>
                <Link to="/users">
                    <button style={btn1Style} id="top" type="button" class="btn btn-primary btn-lg">Users</button>
                </Link>
                <Link to="/users">
                    <button style={btn1Style} type="button" class="btn btn-danger btn-lg" >Box</button>
                </Link>
            </div>
        </div>
    )
}

export default home