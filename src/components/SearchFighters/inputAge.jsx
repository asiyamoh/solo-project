import { useState } from 'react'
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Select, { selectClasses } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';


function inputAge() {

    const dispatch = useDispatch();

    //to hold the input value of age
    const [age, setAge] = useState('')
    
    const handleChange = (event) => {
        setAge(event.target.value)
        console.log('Age bro:', event.target.value)
        dispatch({
            type:'INPUT_SEARCH',
            payload:{property:"age", value:event.target.value}
        }) 
    }

    return (

        <Box>
            {/* MenuItem for Age */}

            <Select
                placeholder="Select a"
                indicator={<KeyboardArrowDown />}
                sx={{
                    width: 240,
                    [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                        },
                    },
                }}
                onChange={handleChange}
                value={age}
            >
                <MenuItem value='8'>8 Years old</MenuItem>
                <MenuItem value="9">9 years old</MenuItem>
                <MenuItem value="10">10 years old</MenuItem>
                <MenuItem value="11">11 years old</MenuItem>
                <MenuItem value="12">12 years old</MenuItem>
                <MenuItem value="13">13 years old</MenuItem>
                <MenuItem value="14">14 years old</MenuItem>
                <MenuItem value="15">15 years old</MenuItem>
                <MenuItem value="16">16 years old</MenuItem>
                <MenuItem value="17">17 years old</MenuItem>
                <MenuItem value="18">Above 18</MenuItem>
            </Select>



        </Box>
    )
}

export default inputAge