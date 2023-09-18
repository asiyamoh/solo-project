import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch } from 'react-redux';


function inputGender() {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const gender = event.target.value
        console.log('heyy')
        console.log('gender', gender)
        dispatch({
            type:'GENDER',
            payload:gender
        })
        dispatch({
            type: 'INPUT_SEARCH',
            payload:{property: "gender", value:event.target.value}
        })
    }

   

    return (

        <Box>
            {/* Radio button for Gender */}
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    onChange={handleChange}
                >
                    <FormControlLabel value="F" control={<Radio />} label="Female" />
                    <FormControlLabel value="M" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
        </Box >
    )
}

export default inputGender