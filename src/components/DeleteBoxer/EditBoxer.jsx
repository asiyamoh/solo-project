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

    const handleSubmit = () => {
        console.log('SUBMIT')
        dispatch({
            type:'EDIT_SUBMIT',
            payload: editBoxer
        })

    }


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

        <button onClick={handleSubmit}>Submit</button>


        </>
    )
}

export default EditBoxer