import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import {useHistory} from "react-router-dom"

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const history = useHistory();

  //function to handle the AddBoxer button
  //this fuction will route the user to the addBoxer page
  const handleAdd = () => {
    console.log('Clicked')
    //switches routes 
    history.push("/addBoxer");
  }


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <div>
        <button onClick={handleAdd}>AddBoxer</button>
      </div>


      <LogOutButton className="btn" />

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
