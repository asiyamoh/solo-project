import { useSelector, useDispatch } from "react-redux"

function EditBoxer(){
    const dispatch =  useDispatch();
    const editBoxer = useSelector((store) => store.editBoxer)
    console.log('the Store:', editBoxer)


    const handleChanges = (property, value) =>  {
        dispatch({
            type: 'EDIT',
            payload: {property: property, value: value}
        })
    }

    // const handleFirstNameChange = (event) =>  {
    //     dispatch({
    //         type: 'EDIT',
    //         payload: {property: 'firstname', value: event.target.value}
    //     })
    // }

    // const handleLastNameChange = (event) =>  {
    //     dispatch({
    //         type: 'EDIT',
    //         payload: {property: 'lastname', value: event.target.value}
    //     })
    // }

    // const handleBirthdateChange = (event) =>  {
    //     dispatch({
    //         type: 'EDIT',
    //         payload: {property: 'birthdate', value: event.target.value}
    //     })
    // }

    // const handleRegionChange = (event) =>  {
    //     dispatch({
    //         type: 'EDIT',
    //         payload: {property: 'region', value: event.target.value}
    //     })
    // }

    // const handleGenderChange = (event) =>  {
    //     dispatch({
    //         type: 'EDIT',
    //         payload: {property: 'gender', value: event.target.value}
    //     })
    // }

    // const handleWeightClassChange = (event) =>  {
    //     dispatch({
    //         type: 'EDIT',
    //         payload: {property: 'weight_class', value: event.target.value}
    //     })
    // }


    return(
        <>
        <h1>Edit Form</h1>
        {/* Input for Member Number */}
        <input  
            type="number"
            placeholder="Member_Number"
            onChange={(event) => handleChanges("member_number", event.target.value)}
            value={editBoxer.member_number}>
        </input>

        {/* Input for first Name */}
        <input
            type='text'
            placeholder="First Name"
            onChange={(event) => handleChanges("firstname", event.target.value)}
            value={editBoxer.firstname}>
        </input>

        {/* Input for Last Name */}
        <input
        type='text'
        placeholder="Last Name"
        onChange={(event) => handleChanges("lastname", event.target.value)}
        value={editBoxer.lastname}>
        </input>

        {/* Input for birthdate */}
        <input
            type='date'
            placeholder="Birthdate"
            onChange={(event) => handleChanges("birthdate", event.target.value)}
            value={editBoxer.birthdate}>
        </input>

        {/* Input for region */}
        <input
            type='text'
            placeholder="Region"
            onChange={(event) => handleChanges("region", event.target.value)}
            value={editBoxer.region}>
        </input>

        {/* Input for gender */}
        <input
            type='text'
            placeholder="Gender"
            onChange={(event) => handleChanges("gender", event.target.value)}
            value={editBoxer.gender}>
        </input>

        {/* Input for weight Class */}
        <input
            type="number"
            placeholder="Weight Class"
            onChange={(event) => handleChanges("weight_class", event.target.value)}
            value={editBoxer.weight_class}>
        </input>


        </>
    )
}

export default EditBoxer