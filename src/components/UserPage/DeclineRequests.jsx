import { useSelector, useDispatch} from "react-redux";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function DeclineRequests() {
  const dispatch = useDispatch();
  const declineStore = useSelector((store) => store.getDeclineRequest);
  console.log("the DeclineStore:", declineStore);

  const handleDelete = (declineFight) => {
    console.log('The decline Fight:', declineFight.fight_id)
    dispatch({
      type: 'HANDLE_DECLINE',
      payload: declineFight.fight_id
    })
  }

  return (
      <>
      <h1>Decline Requests</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Fighters Name</TableCell>
              <TableCell align="left">Opponents Name</TableCell>
              <TableCell align="left">Fight Status</TableCell>
              <TableCell align="left">DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {declineStore.map((row) => (
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
                <TableCell align="left">{row.fight_status}</TableCell>
                <TableCell align="left"><button onClick={() => handleDelete(row)}>DELETE 🗑️</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DeclineRequests;
