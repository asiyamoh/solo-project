import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'

function inputWeightRange() {

    // to hold the input value of weight Class1
    const [weightClass1, setWeightClass1] = useState('');

    // to hold the input value of weight Class2
    const [weightClass2, setWeightClass2] = useState('');

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">

            <div>
                {/* Input field for the range of weight class */}

                <h3>Enter a range of weight</h3>
                <TextField id="outlined-basic" label="WEIGHT CLASS1" variant="outlined"
                    type="number"
                    onChange={(event) => {
                        setWeightClass1(event.target.value)
                    }}
                    value={weightClass1}
                />

                <TextField id="outlined-basic" label="WEIGHT CLASS2" variant="outlined"
                    type="number"
                    onChange={(event) => {
                        setWeightClass2(event.target.value)
                    }}
                    value={weightClass2}
                />
            </div >
        </Box>
    )
}

export default inputWeightRange