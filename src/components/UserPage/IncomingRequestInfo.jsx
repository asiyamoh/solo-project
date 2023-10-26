import { useSelector, useDispatch } from "react-redux";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function IncomingRequestInfo() {
  const dispatch = useDispatch();

  const incomingRequest = useSelector((store) => store.incomingRequests);
  console.log("almost there:", incomingRequest);

  const handleAccpet = (acceptedFight) => {
    console.log("Clicked on accept!");
    console.log("Event ACCEPT:", acceptedFight);
    dispatch({
      type: "ACCEPT_REQUEST",
      payload: acceptedFight,
    });
  };

  const handleDecline = (declineFight) => {
    console.log("Clicked on decline!");
    console.log("Event:", declineFight);
    dispatch({
      type: "DECLINE_REQUEST",
      payload: declineFight,
    });
  };

  return (
      <>
        <h1>Incoming Requests</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Fighters Name</TableCell>
                <TableCell align="right">Opponents Name</TableCell>
                <TableCell align="center">Match Date</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Opponents Number of fights</TableCell>
                <TableCell align="center">Opponents Weight Class</TableCell>
                <TableCell align="center">Accept OR Decline</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {incomingRequest.map((row) => (
                <TableRow
                  key={row.fight_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    {row.member1_firstname} {row.member1_lastname}
                  </TableCell>
                  <TableCell align="center">
                    {row.member2_firstname} {row.member2_lastname}
                  </TableCell>
                  <TableCell align="center">{row.fight_date}</TableCell>
                  <TableCell align="center">{row.fight_date_location}</TableCell>
                  <TableCell align="center">{row.member2_fightcount}</TableCell>
                  <TableCell align="center">{row.member2_weightclass}</TableCell>
                  <TableCell align="center">
                    <>
                      <button onClick={() => handleAccpet(row)}>Accept</button>
                      <button onClick={() => handleDecline(row)}>
                        Decline
                      </button>
                    </>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
  );
}

export default IncomingRequestInfo;
