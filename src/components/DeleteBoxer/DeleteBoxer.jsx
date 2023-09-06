import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteBoxer() {

    const dispatch = useDispatch();
    const store = useSelector(store => store.getReducer)

    console.log('the store:', store)

    //As Page loads, it will call the function getBoxers 
    useEffect(() => {
        getBoxers()
    }, [])

    //this function will talk to the DB and 
    //get all boxer with the coaches ID
    const getBoxers = () => {
        console.log('In here!')
        dispatch({
            type: 'GET_BOXER'
        })

    }

    //this function will be called 
    //after the trash has been click
    const handleClick = () => {
        console.log('I have been clicked!')
    }


    return (
        <>
            <h1>DELETE BOXER</h1>
            <div>
                {/* map over the store and put it on DOM */}
                {store.map(boxer => {
                    return (
                        <>
                            <Stack direction="column-reverse" spacing={1} onClick={handleClick}>
                                <h3 key={boxer.id}>
                                    {boxer.firstname},
                                    {boxer.lastname},
                                    {boxer.weight_class}
                                    {/* The  trash Icon */}
                                    <IconButton aria-label="delete" color="secondary">
                                        <DeleteIcon/>
                                    </IconButton>
                                </h3>
                            </Stack>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default DeleteBoxer