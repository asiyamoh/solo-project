import InputRegion from './inputRegion'
import InputAge from './inputAge'
import InputFights from './inputNumberOfFights'
import InputGender from './inputGender'
import InputWeight from './inputWeightRange'


function SearchFighters() {

    const handleNext = () => {
        console.log('CLICKED')

    }

    return (
        <>
            <h1>Search Fighters</h1>

            <InputGender />

            <InputWeight />

            <InputRegion />

            <InputFights />

            <InputAge />

            <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default SearchFighters