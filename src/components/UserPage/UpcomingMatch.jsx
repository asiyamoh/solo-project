import { useSelector, useDispatch } from "react-redux";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function UpcomingMatch() {
  const dispatch = useDispatch();
  const upcomings = useSelector((store) => store.getUpcomingMatch);
  console.log("the store upcoming:", upcomings);

  //🛑 need to do the happened button
  const handleHappened = (happenedMatch) => {
    console.log("Happened!", happenedMatch);
    dispatch({
      type: "HAPPENED_MATCH",
      payload: happenedMatch,
    });
  };

  return (
    <>
      <h1>Upcoming Match</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Fighters Name</TableCell>
              <TableCell align="right">Opponents Name</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Weigh in Time</TableCell>
              <TableCell align="center">Door opens</TableCell>
              <TableCell align="center">Happened</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {upcomings.map((row) => (
              <TableRow
                key={row.fight_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  {row.member1_firstname} {row.member1_lastname}
                </TableCell>
                <TableCell align="left">
                  {row.member2_firstname} {row.member2_lastname}
                </TableCell>
                <TableCell align="left">{row.location}</TableCell>
                <TableCell align="left">{row.weigh_time}</TableCell>
                <TableCell align="left">{row.show_time}</TableCell>
                <TableCell>
                  <button onClick={() => handleHappened(row)}>
                    Happened🗑️
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default UpcomingMatch;
