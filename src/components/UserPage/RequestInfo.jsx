import {useSelector} from 'react-redux'


function RequestInfo(){
    const request = useSelector((store) => store.getRequest)
    console.log('store Request:', request)


    return(
        <>
            <h1>HEYYYY</h1>
            
            <div>




            </div>
        </>
    )
}

export default RequestInfo