import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function MoreDetails() {
    let { id } = useParams()
    const dispatch = useDispatch();
    const history = useHistory();


    const store = useSelector(store => store.getSpecific)
    console.log('the store hey:', store)

    const getSpecific = () => {
        console.log('In here', id)
        dispatch({
            type: 'SPECIFIC',
            payload: id
        })
    }


    useEffect(() => {
        getSpecific()
    }, [])

    const handleClick = () => {
        console.log('CLICKED')
        history.push('/request')
    }



    return (
        // <h1>More Deatails</h1>
        <>
            <h1>More Details</h1>
            <div>
                {store[0] ? (
                    <h3>
                        {/* return specific detalis of the boxer */}
                        {store[0].firstname}
                        {store[0].lastname}
                        {store[0].weight_class}
                        {store[0].coach_name}
                        {store[0].fights_count}
                    </h3>
                ): (
                    <p>Loading...</p>
                )}
                <button onClick={handleClick}>NEXT</button>
            </div>
        </>
    )
}

export default MoreDetails