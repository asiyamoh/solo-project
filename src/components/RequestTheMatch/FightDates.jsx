import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

function fightDates() {

    const dispatch = useDispatch();
    const fightDates = useSelector((store) => store.fightDates)
    console.log('fightDates:', fightDates)

    useEffect(() => {
        getDates()
    }, [])

    const getDates = () => {
        dispatch({
            type: 'GET_DATES'
        })
    }



    return (
        <>
            <h1>HEY MAPPING</h1>
            <>
                {fightDates.map(date => {
                    return (
                        <>
                            <div>
                                {(date.date)}
                            </div>
                        </>
                    )
                })}
            </>
        </>
    )
}

export default fightDates