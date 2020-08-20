import React, {useState, useEffect} from 'react';

function User({match})
{
    useEffect(()=> {
        fetchUserInfo();
        console.log(match);
    },[]);
    
    const [item,setItem] = useState({});

    const fetchUserInfo = async () => {

        const fetchUserInfo = await fetch
        (
        `https://reqres.in/api/users/${match.params.id}`
        );
        const item = await fetchUserInfo.json();
        setItem(item);
        console.log(item);
    };
    return (
        <div>
            <ul>            
                {
                    item.map(user=> 
                    <li key={user.id}> 
                        {user.first_name} 
                        {user.last_name} 
                    </li>
                    )
                }
            </ul>
        </div>
    );
}

  

export default User