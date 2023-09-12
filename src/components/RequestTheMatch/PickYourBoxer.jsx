import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';



function PickYourBoxer() {

    const dispatch = useDispatch();
    const [chosenMember, setChosenMember] = useState('')
    const member = useSelector(store => store.getReducer)
    console.log('members:', member)
    console.log('picked boxer', chosenMember)


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

    return (
        <>
            
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Your Boxer</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={chosenMember}
                        label="Your Boxer"
                        onChange={(event) => {
                            setChosenMember(event.target.value)
                        }}
                    >
                        {member.map(boxer => {
                            return(
                            <MenuItem value={boxer.id}>{boxer.firstname} {boxer.lastname}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default PickYourBoxer