import {useEffect} from "react"
import { useDispatch } from "react-redux"

function DeleteBoxer(){

    const dispatch = useDispatch();

    //As Page loads, it will call the function getBoxers 
    useEffect(() => {
        getBoxers()
    }, [])

    const getBoxers = () => {
        console.log('In here!')
        dispatch({
            type:'GET_BOXER'
        })
        
    }


    return(
        <>
        <h1>DELETE BOXER</h1>
        </>
    )
}

export default DeleteBoxer