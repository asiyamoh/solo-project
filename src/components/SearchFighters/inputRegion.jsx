import * as React from 'react';
import Box from '@mui/material/Box';
import Select, { selectClasses } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react'


function inputRegion(){

     //to hold the input value of region
     const [region, setRegion] = useState('');

    return (
        <Box>
            {/* MenuItem for the  Region */}
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
                    setRegion(event.target.value)

                }}
                value={region}

            >
                <MenuItem value="Buffalo">Buffalo</MenuItem>
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="Chicago">Chicago</MenuItem>
                <MenuItem value="Cincinnati">Cincinnati</MenuItem>
                <MenuItem value="Cleveland">Cleveland</MenuItem>
                <MenuItem value="Colorado/New Mexico">Colorado/New Mexico</MenuItem>
                <MenuItem value="Detroit">Detroit</MenuItem>
                <MenuItem value="Florida">Florida</MenuItem>
                <MenuItem value="Hawaii">Hawaii</MenuItem>
                <MenuItem value="Indiana">Indiana</MenuItem>
                <MenuItem value="Iowa">Iowa</MenuItem>
                <MenuItem value="Kansas City">Kansas City</MenuItem>
                <MenuItem value="Kansas/Oklahoma">Kansas/Oklahoma</MenuItem>
                <MenuItem value="Michigan">Michigan</MenuItem>
                <MenuItem value="Mid-South">Mid-South</MenuItem>
                <MenuItem value="Nevada">Nevada</MenuItem>
                <MenuItem value="New England">New England</MenuItem>
                <MenuItem value="New Jersey">New Jersey</MenuItem>
                <MenuItem value="New York Metro">New York Metro</MenuItem>
                <MenuItem value="Omaha">Omaha</MenuItem>
                <MenuItem value="Pennsylvania">Pennsylvania</MenuItem>
                <MenuItem value="Rocky Mountain">Rocky Mountain</MenuItem>
                <MenuItem value="St. Louis">St. Louis</MenuItem>
                <MenuItem value="Southeast">Southeast</MenuItem>
                <MenuItem value="Texas">Texas</MenuItem>
                <MenuItem value="Toledo">Toledo</MenuItem>
                <MenuItem value="Tri-State">Tri-State</MenuItem>
                <MenuItem value="Upper Midwest">Upper Midwest</MenuItem>
                <MenuItem value="Washington DC">Washington DC</MenuItem>
                <MenuItem value="Wisconsin">Wisconsin</MenuItem>
            </Select>
        </Box>
    )
}


export default inputRegion