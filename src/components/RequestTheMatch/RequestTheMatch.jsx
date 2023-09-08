import { useSelector } from "react-redux"


function RequestTheMatch(){

    const store = useSelector(store => store.getSpecific)
    console.log('the store:', store)
    
    return(
        <>
            <h1>Request the match</h1>
            <h3>
                {/* return specific detalis of the boxer */}
                {store[0].firstname}
                {store[0].lastname}
                {store[0].weight_class}
                {store[0].coach_name}
                {store[0].fights_count}
            </h3>

            <h2>PICK A DATE</h2>

            <button>SUBMIT</button>
        
        </>
    )
}

export default RequestTheMatch