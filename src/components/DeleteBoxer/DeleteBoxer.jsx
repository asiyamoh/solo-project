import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

function DeleteBoxer() {

    const dispatch = useDispatch();
    const store = useSelector(store => store.getReducer)

    console.log('the store:', store)

    //As Page loads, it will call the function getBoxers 
    useEffect(() => {
        getBoxers()
    }, [])

    const getBoxers = () => {
        console.log('In here!')
        dispatch({
            type: 'GET_BOXER'
        })

    }


    return (
        <>
            <h1>DELETE BOXER</h1>
            <div>
                {/* map over the store and put it on DOM */}
                {store.map(boxer => {
                    return (
                        <>
                            <h3 key={boxer.id}>
                                {boxer.firstname},
                                { boxer.lastname},
                                { boxer.weight_class}
                            </h3>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default DeleteBoxer