import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState} from "react"
import RequestTheMatch from "./RequestTheMatch";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function fightDates() {

    const dispatch = useDispatch();
    const fightDates = useSelector((store) => store.fightDates)
    console.log('fightDates:', fightDates)

    const [chosenDate, setChosenDate] = useState('');
    console.log('ChosenDate:', chosenDate)

    useEffect(() => {
        getDates()
    }, [])

    const getDates = () => {
        dispatch({
            type: 'GET_DATES'
        })
    }

    const handleChangeDate = (event) => {
        setChosenDate(event.target.value)
        dispatch({
            type: 'CHOSEN_DATE',
            payload:event.target.value
        })
    }



    return (
        <>
        
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pick A date</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={chosenDate}
                        label="Date"
                        onChange={handleChangeDate}
                    >
                        {fightDates.map(date => {
                            return(
                            <MenuItem value={date.id}>{date.date} {date.location} </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default fightDates