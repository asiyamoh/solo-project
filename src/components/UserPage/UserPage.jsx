import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import RequestInfo from "./RequestInfo";
import IncomingRequestInfo from "./IncomingRequestInfo";
import UpcomingMatch from "./UpcomingMatch";
import DeclineRequests from "./DeclineRequests";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const history = useHistory();
  const dispatch = useDispatch();

  //function to handle the AddBoxer button
  //this fuction will route the user to the addBoxer page
  const handleAdd = () => {
    console.log("Clicked");
    //switches routes
    history.push("/addBoxer");
  };

  //this function is called
  //when the search button is clicked
  const handleSearch = () => {
    console.log("CLICKED");
    //will change route to the search fighter page
    history.push("/searchFighters");
  };

  const handleYourBoxer = () => {
    history.push("/deleteBoxer");
  };

  const getAllRequest = () => {
    console.log("HEYYYYYYYY");
    dispatch({
      type: "GET_REQUEST",
    });
    dispatch({
      type: "GET_INCOMING_REQUEST",
    });
    dispatch({
      type: 'GET_UPCOMING_MATCH',
    });
    dispatch({
      type: 'GET_DECLINE_REQUEST',
    });
  };

  useEffect(() => {
    getAllRequest();
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <UpcomingMatch />
      <IncomingRequestInfo />

      <RequestInfo />

      <DeclineRequests/>

      <div>
        <button onClick={handleAdd}>Add Boxer</button>
        <button onClick={handleSearch}>Search Boxer</button>
        <button onClick={handleYourBoxer}>Your Boxers</button>
      </div>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
