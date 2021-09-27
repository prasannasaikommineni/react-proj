import React, { useState, useEffect } from "react";
// import './github-hook.css' ;

function RestCountries() {
  const [users, setUsers] = useState([]);

  useEffect( () => {  
    async function getData(){    
    let res = await fetch("https://api.github.com/users");    
    let data = await  res.json()
    setUsers(data)
      }
      getData();
  }, []); 

  return (
    <div className="section">
      <h4>List of Users: </h4>
      {users.map(user => (
        <div key={user.id} className="card">
          <h5>{user.login}</h5>
        </div>
      ))}
    </div>
  );
}


 export default RestCountries ;