import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function ResultOfTheSearch() {

    const history = useHistory();
    const store = useSelector(store => store.search)

    const handleClick = (id) => {
        console.log('I have been clicked!')
        console.log('event:', id)
        history.push(`/moreDetails/${id}`)
    }

    return (
        <>
            <h1>Result of the search</h1>
            <div>
                {store.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div>

                            {store.map(search => {
                                return (
                                    <button onClick={() => handleClick(search.id)} key={search.id}>
                                        <h3>
                                            {search.firstname},
                                            {search.lastname},
                                            weightClass:{search.weight_class},
                                            #fights{search.fights_count}
                                        </h3>
                                    </button>
                                )
                            })}
                        </div>
                    </>
                )}


            </div>
        </>
    )
}

export default ResultOfTheSearch