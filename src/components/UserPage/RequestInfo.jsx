import { useSelector } from 'react-redux'


function RequestInfo() {
    const requests = useSelector((store) => store.getRequest)
    console.log('store Request:', requests)


    return (
        <>
            <h1>HEYYY</h1>

            <div>
                {requests.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div>
                            {requests.map(request => {
                                return (
                                    <div>
                                        <h3>
                                            {request.first_name}
                                        </h3>
                                    </div >
                                )
                            })}
                        </div>
                    </>
                )}

            </div>

        </>
    )
}

export default RequestInfo