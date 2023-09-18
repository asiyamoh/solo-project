import { useState } from 'react'
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function inputWeightRange() {

    const dispatch = useDispatch();

    // to hold the input value of weight Class1
    const [weightClass1, setWeightClass1] = useState('');

    // to hold the input value of weight Class2
    const [weightClass2, setWeightClass2] = useState('');

    const handleChangeWeight1 = (event) => {
        setWeightClass1(event.target.value)
        console.log('weight2:', event.target.value)
        dispatch({
            type:'INPUT_SEARCH',
            payload:{property: "weight1", value: event.target.value}
        })
    }

    const handleChangeWeight2 = (event) => {
        setWeightClass2(event.target.value)
        console.log('weight2:', event.target.value)
        dispatch({
            type:'INPUT_SEARCH',
            payload:{property:"weight2", value: event.target.value}
        })
    }

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
                    onChange={handleChangeWeight1}
                    value={weightClass1}
                />

                <TextField id="outlined-basic" label="WEIGHT CLASS2" variant="outlined"
                    type="number"
                    onChange={handleChangeWeight2}
                    value={weightClass2}
                />
            </div >
        </Box>
    )
}

export default inputWeightRange