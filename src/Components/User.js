import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const imgStyle = {
  maxHeight: 249,
  maxWidth: 249,
  margin:'30px'
}

function UsersRecord({match})
{
    const [user,setUser] = useState([])
    var LINK_ =  `https://reqres.in/api/users/${match.params.id}`;
    useState(() => {
        axios.get(LINK_)
        .then(res=> {
            setUser(res.data.data) 
        })
        .catch(err => {
            console.log(err)
        },[])   //There is an infinite loop for the data fetching, inorder to make the data fetched only once we passed empth list
    })

    return (
        <div>
          <div>
            <center>
            <Card className="profile-container">
              <div><CardImg className="profile-img" top width="100%" style={imgStyle} src={user.avatar} alt="User Box Profile" /></div>
              <CardBody>
                <CardTitle className="profile-name"><strong>{user.first_name} {user.last_name}</strong></CardTitle>
                <CardSubtitle className="profile-email">{user.email}</CardSubtitle>
              </CardBody>
            </Card>
            </center>
          </div>
        </div>
    )
}

export default UsersRecord