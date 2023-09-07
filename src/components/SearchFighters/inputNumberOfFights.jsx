import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react'


function InputNumberOfFights() {

    //to hold the input value of number of Fights
    const [numOfFights, setNumOfFights] = useState('');

    return (
        <Box>

            {/* Radio button for Number of Fights */}
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">NUMBER OF FIGHTS</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    onChange={(event) => {
                        setNumOfFights(event.target.value)
                    }}
                    value={numOfFights}
                >
                    <FormControlLabel value="0" control={<Radio />} label="0 fights" />
                    <FormControlLabel value="4" control={<Radio />} label="under 5 fights" />
                    <FormControlLabel value="5" control={<Radio />} label="above 5 fights" />
                    <FormControlLabel value="11" control={<Radio />} label="above 10 fights" />
                    <FormControlLabel value="15" control={<Radio />} label="Elite" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default InputNumberOfFights
