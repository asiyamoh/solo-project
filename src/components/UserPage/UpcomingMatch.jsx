import { useSelector } from "react-redux"

function UpcomingMatch(){
    const upcoming = useSelector((store) => store.getUpcomingMatch)
    console.log('the store upcoming:', upcoming)

    return(
        <>
        <h1>Upcoming Match</h1>
        
        </>
    )
}

export default UpcomingMatch