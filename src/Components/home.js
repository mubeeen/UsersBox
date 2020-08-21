import React, {useState, useEffect} from 'react'
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
                <button style={btn1Style} id="top" type="button" class="btn btn-primary btn-lg">User</button>
                <button style={btn1Style} type="button" class="btn btn-danger btn-lg" >Box</button>

            </div>
        </div>
    )
}

export default home