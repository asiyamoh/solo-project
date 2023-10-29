import { useSelector } from "react-redux";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function RequestInfo() {
  const requests = useSelector((store) => store.getRequest);
  console.log("store Request:", requests);

  return (
      <>
      <h1>Requsted waitting </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Fighters Name</TableCell>
              <TableCell align="left">Opponents Name</TableCell>
              <TableCell align="left">Fight Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((row) => (
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default RequestInfo;
