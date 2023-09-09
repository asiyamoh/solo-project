import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from "react-router-dom"

function DeleteBoxer() {

    const dispatch = useDispatch();
    const store = useSelector(store => store.getReducer)
    const history = useHistory();

    console.log('the store:', store)

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
            <h1>DELETE BOXER</h1>
            <div>
                {/* map over the store and put it on DOM */}
                {store.map(boxer => {
                    return (
                        <>
                            <Stack direction="column-reverse" spacing={1} onClick={() => handleClickTrash(boxer.id)}>
                                <h3 key={boxer.id}>
                                    {boxer.firstname},
                                    {boxer.lastname},
                                    {boxer.weight_class}

                                    {/* The  trash Icon */}
                                    <IconButton aria-label="delete" color="secondary"
                                        onClick={() => handleClickTrash(boxer.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>

                                    {/* The edit button*/}
                                    <button onClick={() => handleEditClick(boxer)}>Edit</button>
                                </h3>
                            </Stack>
                        </>
                    )
                })}
            </div>

            <button onClick={handleClickHome}>HOME</button>
            {/* will need the back button here  🥲*/}
        </>
    )
}

export default DeleteBoxer