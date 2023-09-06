import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select, { selectClasses } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';


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
        // if(age >= 18){
        //     console.log('heyyy')
        //     setAge('01/01/2004')
        // }


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

                {/* Radio button for Gender */}
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        onChange={(event) => {
                            setGender(event.target.value)
                        }}
                        value={gender}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>


                {/* MenuItem for the range of the weight class */}
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
                        setWeightClass1(event.target.value)
                        // setWeightClass2(event.target.value2)
                    }}
                    value={weightClass1}
                    // value2={weightClass2}
                >
                    <MenuItem value=" ">less than 102</MenuItem>
                    <MenuItem value=" ">105lbs -108lbs </MenuItem>
                    <MenuItem value=" ">108lbs-112lbs</MenuItem>
                    <MenuItem value=" ">112lbs - 115lbs</MenuItem>
                    <MenuItem value=" ">115lbs - 118lbs</MenuItem>
                    <MenuItem value=" ">118lbs - 122lbs</MenuItem>
                    <MenuItem value=" ">122lbs - 126lbs</MenuItem>
                    <MenuItem value=" ">126lbs - 130lbs</MenuItem>
                    <MenuItem value="  ">130lbs - 135lbs</MenuItem>
                    <MenuItem value=" ">135lbs - 140lbs</MenuItem>
                    <MenuItem value=" ">140lbs - 147lbs</MenuItem>
                    <MenuItem value=" ">147lbs - 154lbs</MenuItem>
                    <MenuItem value=" ">154lbs - 160lbs</MenuItem>
                    <MenuItem value=" ">160lbs - 168lbs</MenuItem>
                    <MenuItem value=" ">168lbs - 175lbs</MenuItem>
                    <MenuItem value="175">175lbs - 200lbs</MenuItem>
                    <MenuItem value="200">200lbs +</MenuItem>
                </Select>


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
                    <MenuItem value=" ">8 Years old</MenuItem>
                    <MenuItem value=" ">9 years old</MenuItem>
                    <MenuItem value=" ">10 years old</MenuItem>
                    <MenuItem value=" ">11 years old</MenuItem>
                    <MenuItem value=" ">12 years old</MenuItem>
                    <MenuItem value=" ">13 years old</MenuItem>
                    <MenuItem value=" ">14 years old</MenuItem>
                    <MenuItem value=" ">15 years old</MenuItem>
                    <MenuItem value="  ">16 years old</MenuItem>
                    <MenuItem value="17">17 years old</MenuItem>
                    <MenuItem value="19">Above 18</MenuItem>
                </Select>










                {/* Input field for Age */}
                <TextField id="outlined-basic" label="AGE RANGE" variant="outlined"
                    type='number'
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