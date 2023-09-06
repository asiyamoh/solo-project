import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { useState } from 'react'


function SearchFighters() {

    //to hold the input vlaue of gender
    const [gender, setGender] = useState('')

    // to hold the input value of weight Class1
    const [weightClass1, setWeightClass1] = useState('');

    // to hold the input value of weight Class2
    const [weightClass2, setWeightClass2] = useState('');

    //to hold the input value of region
    const [region, setRegion] = useState('');

    //to hold the input value of number of Fights
    const [numOfFights, setNumOfFights] = useState('');

    //to hold the input value of age
    const [age, setAge] = useState('')

    


    const handleNext = () => {
        console.log('CLICKED')
        console.log('gender:', gender)
        console.log('weight1', weightClass1)
        console.log('weight2:', weightClass2)
        console.log('region:', region)
        console.log('Fights:', numOfFights)
        console.log('Age:', age)
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
                <TextField id="outlined-basic" label="GENDER" variant="outlined"
                    onChange={(event) => {
                        setGender(event.target.value)
                    }}
                    value={gender} />

                {/* Input field for the range of weight class */}
                <div>
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
                </div>

                {/* Input field for region */}
                <TextField id="outlined-basic" label="REGION" variant="outlined"
                    onChange={(event) => {
                        setRegion(event.target.value)
                    }}
                    value={region}
                />

                {/* Input field for Number of Fights */}
                <TextField id="outlined-basic" label="NUMBER OF FIGHTS" variant="outlined"
                    type="number"
                    onChange={(event) => {
                        setNumOfFights(event.target.value);
                    }}
                    value={numOfFights}
                />

                {/* Input field for Age */}
                <TextField id="outlined-basic" label="AGE RANGE" variant="outlined" 
                    type = 'number'
                    onChange={(event) => {
                        setAge(event.target.value)
                    }}
                    value={age}
                />
            </Box>
            <button onClick={handleNext}>NEXT</button>

        </>
    )
}

export default SearchFighters