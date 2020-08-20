import React from 'react'
import {Link} from 'react-router-dom';

function Navbar(propes)
{
    const NavStyle = {
      color: 'White',
      padding: '10px'
    };

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" style={NavStyle} href="#">Users Box</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <Link style={NavStyle} to="/">
                <li className="nav-item active">Home</li>
              </Link>
              <Link style={NavStyle} to="/users">
                <li className="nav-item">Users</li>
              </Link>
            </ul>
          </div>
      </nav>
      </div>
    )
}


export default Navbar