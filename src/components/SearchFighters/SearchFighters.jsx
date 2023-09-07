import InputRegion from './inputRegion'
import InputAge from './inputAge'
import InputFights from './inputNumberOfFights'
import InputGender from './inputGender'
import InputWeight from './inputWeightRange'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function SearchFighters() {

    const history = useHistory()
    
    const handleNext = () => {
        console.log('CLICKED')
        history.push('/result')
    }

    return (
        <>
            <h1>Search Fighters</h1>

            <InputGender/>

            <InputWeight />

            <InputRegion />

            <InputFights />

            <InputAge />

            <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default SearchFighters