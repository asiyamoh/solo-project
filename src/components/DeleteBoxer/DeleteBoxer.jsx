import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from "react-router-dom";

import AddBoxer from "../AddBoxer/AddBoxer";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function DeleteBoxer() {

    const dispatch = useDispatch();
    const store = useSelector(store => store.getReducer)
    const history = useHistory();

    console.log('the store bro:', store)

    //As Page loads, it will call the function getBoxers 
    useEffect(() => {
        getBoxers()
    }, [])

    //this function will talk to the DB and 
    //get all Member with the coaches ID
    const getBoxers = () => {
        console.log('In here!')
        dispatch({
            type: 'GET_BOXER'
        })

    }

    //this function will be called 
    //after the trash Icon has been click
    const handleClickTrash = (id) => {
        console.log('I have been clicked!')
        console.log('ID:', id)
        //this will talk to the  DB and 
        //delete the member with that ID
        dispatch({
            type: 'DELETE_BOXER',
            payload: id
        })
    }

    //this function will be called
    //after the home button was clicked
    const handleClickHome = () => {
        console.log('CLICKED')
        //change route to the home page
        history.push('/')
    }

    //this function will be called  
    //after the edit button was clicked
    const handleEditClick = (boxer) => {
        console.log('CLICKED:', boxer)
        dispatch({type:'SET_EDIT_BOXER', payload:boxer})
        history.push('/edit')

    }


    return (
        <>
        <AddBoxer/>
            <h1>Your Boxers</h1>

            {/* <button onClick={handleClickHome}>HOME</button>
            will need the back button here  🥲 */}
            <>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell  align="left">Member Number</TableCell>
              <TableCell align="left">Fighters Name</TableCell>
              <TableCell align="left">Birthdate</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Weight Class</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.map((row) => (
              <TableRow
                key={row.fight_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  {row.member_number}
                </TableCell>
                <TableCell align="left">
                    {row.firstname} {row.lastname}
                </TableCell>
                <TableCell align="left">{row.birthdate}</TableCell>
                <TableCell align="left">{row.gender}</TableCell>
                <TableCell align="left">{row.weight_class}</TableCell>
                <TableCell>
                <button onClick={() => handleEditClick(row)}>Edit</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            
            </>
        </>
    )
}

export default DeleteBoxer