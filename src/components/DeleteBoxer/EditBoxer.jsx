import { useSelector, useDispatch} from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditBoxer(){
    const dispatch =  useDispatch();
    const history = useHistory();
    const editBoxer = useSelector((store) => store.editBoxer)
    console.log('the Store of edit1:', editBoxer)


    // This function handles all the input change
    // and temporarilly stores it in a store
    const handleChanges = (property, value) =>  {
        dispatch({
            type: 'EDIT',
            payload: {property: property, value: value}
        })
    }

    //handle submit will call the sage
    //the saga will take care of the axios request 
    const handleSubmit = () => {
        console.log('SUBMIT')
        dispatch({
            type:'EDIT_SUBMIT',
            payload: editBoxer
        })
        //after they are done editing,
        //go back to home
        history.push('/')
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

        {/* Submit button */}
        <button onClick={handleSubmit}>Submit</button>


        </>
    )
}

export default EditBoxer