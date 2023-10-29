import React from "react";
import './UserPage.css';
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
      <h2>Welcome, Coach {user.first_name}</h2>

      <UpcomingMatch />
      <IncomingRequestInfo />

      <RequestInfo />

      <DeclineRequests/>

      <LogOutButton className="logoutBtn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
