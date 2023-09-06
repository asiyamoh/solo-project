import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';


function SearchFighters() {

    const handleNext = () => {
        console.log('CLICKED')
    }

    return (
        <>
            <h1>Search Fighters</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                
                {/* input field for the searches */}
                <TextField id="outlined-basic" label="GENDER" variant="outlined" />
                <TextField id="outlined-basic" label="WEIGHT CLASS" variant="outlined" />
                <TextField id="outlined-basic" label="REGION" variant="outlined" />
                <TextField id="outlined-basic" label="NUMBER OF FIGHTS" variant="outlined" />
                <TextField id="outlined-basic" label="AGE RANGE" variant="outlined" />
            </Box>
            <button onClick={handleNext}>NEXT</button>

        </>
    )
}

export default SearchFighters