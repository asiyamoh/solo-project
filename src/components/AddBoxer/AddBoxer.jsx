import { useState } from 'react'
function AddBoxer() {

    //to hold the input of the Member Number
    const [MemberNumber, setNewMemberNumber] = useState('');

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

    // this handles all the Inputs from the form
    const handleInputs = (event) => {
        event.preventDefault();
        console.log('in here!');
        console.log('Number:', MemberNumber);
        console.log('firstName:', firstName);
        console.log('LastName:', lastName);
        console.log('birthdate:', birthdate);
        console.log('Gender:', gender);
        console.log('weight', weight);
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
                    value={MemberNumber}>
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


                <button type='submit'>Submit</button>
            </form>

        </>
    )
}

export default AddBoxer;