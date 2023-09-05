import { useState } from 'react'
import  {useDispatch} from 'react-redux'
function AddBoxer() {

    const dispatch  = useDispatch();

    //to hold the input of the Member Number
    const [memberNumber, setNewMemberNumber] = useState('');

    //to hold the input of the First Name
    const [firstName, setFirstName] = useState('');

    //to hold the input of the Last Name
    const [lastName, setLastName] = useState('');

    //to hold the input of the Birthdate
    const [birthdate, setBirthdate] = useState('');

    //to hold the input of the Gender
    const [gender, setGender] = useState('');

    //to hold the input of the weight
    const [weight, setWeight] = useState('');

    //to hold the input of the region
    //might make this into a drop down😀
    const [region, setRegion] = useState('')

    // this handles all the Inputs from the form
    const handleInputs = (event) => {
        event.preventDefault();

        //make sure every input has a value
        if(memberNumber && firstName && lastName && birthdate && gender && weight && region){
            console.log('Got Everything!')

            //make all the input values into an object
            let addBoxer = {
                memberNumber,
                firstName,
                lastName,
                birthdate,
                gender,
                weight,
                region
            }
            dispatch({
                type:'ADD_BOXER',
                payload:addBoxer
            })
            
        }
        //if not, alert the user to make sure the input has value
        else{
            alert('MAKE SURE THE INPUT HAS VALUE')
        }
    }

    return (
        <>
            <h1>ADD Boxer</h1>
            <form onSubmit={handleInputs}>
                {/* Input of the Member Number */}
                <input
                    type="number"
                    placeholder="MEMBER NUMBER"
                    onChange={(event) => {
                        setNewMemberNumber(event.target.value)
                    }}
                    value={memberNumber}>
                </input>

                {/* Input of the First Name */}
                <input
                    type="text"
                    placeholder='FIRST NAME'
                    onChange={(event) => {
                        setFirstName(event.target.value)
                    }}
                    value={firstName}>
                </input>

                {/* Input of the Last Name */}
                <input
                    type='text'
                    placeholder='LAST NAME'
                    onChange={(event) => {
                        setLastName(event.target.value)
                    }}
                    value={lastName}>
                </input>

                {/* Input of the Birthdate */}
                <input
                    //fix this, so the birthdate placeholder shows up
                    //instead of the mm/dd/yyyy
                    //will have to use CSS
                    placeholder='BIRTHDATE'
                    type='date'
                    onChange={(event) => {
                        setBirthdate(event.target.value)
                    }}
                    value={birthdate}>
                </input>

                {/* Input of the Gender */}
                <input
                    type="text"
                    placeholder='GENDER'
                    onChange={(event) => {
                        setGender(event.target.value)
                    }}
                    value={gender}>
                </input>

                {/* Input of the Weight */}
                <input
                    type="number"
                    placeholder='Weight'
                    onChange={(event) => {
                        setWeight(event.target.value)
                    }}
                    value={weight}>
                </input>

                {/* Input of the Add Boxer */}
                <input
                    type='text'
                    placeholder='REGION'
                    onChange={(event) => {
                        setRegion(event.target.value)
                    }}
                    value={region}>
                </input>

                <button type='submit'>Submit</button>
            </form>

        </>
    )
}

export default AddBoxer;