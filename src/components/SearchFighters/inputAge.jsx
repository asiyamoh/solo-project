import * as React from 'react';
import Box from '@mui/material/Box';
import Select, { selectClasses } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react'

function inputAge() {

    //to hold the input value of age
    const [age, setAge] = useState('')

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
                onChange={(event) => {
                    setAge(event.target.value)
                }}
                value={age}
            >
                <MenuItem value="01/01/2001">8 Years old</MenuItem>
                <MenuItem value="01/01/2002">9 years old</MenuItem>
                <MenuItem value="01/01/2003">10 years old</MenuItem>
                <MenuItem value="01/01/2004">11 years old</MenuItem>
                <MenuItem value="01/01/2005">12 years old</MenuItem>
                <MenuItem value="01/01/2006">13 years old</MenuItem>
                <MenuItem value="01/01/2007">14 years old</MenuItem>
                <MenuItem value="01/01/2008">15 years old</MenuItem>
                <MenuItem value="01/01/2007">16 years old</MenuItem>
                <MenuItem value="01/01/2006">17 years old</MenuItem>
                <MenuItem value="01/01/2005">Above 18</MenuItem>
            </Select>



        </Box>
    )
}

export default inputAge