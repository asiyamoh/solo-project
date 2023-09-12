import { useSelector } from "react-redux"
import RequestTheMatch from "./RequestTheMatch"

function fightDates() {

    const store = useSelector((store) => store.fightDates)
    console.log('store1:', store)


    return (
        <>
            <h1>HEY MAPPING</h1>

            <div>
                {store.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {store.map(date => {
                            return (
                                <>
                                    {date.fight_dates}
                                    <RequestTheMatch dates={date.fightDates}/>
                                </>
                            )
                        })}
                    </>

                )}


            </div>
        </>
    )
}

export default fightDates