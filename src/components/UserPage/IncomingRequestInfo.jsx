import {useSelector} from 'react-redux'

function IncomingRequestInfo() {

    const incomingRequest = useSelector((store) => store.incomingRequests)
    console.log('almost there:', incomingRequest);


  return (
    <>
      <h1>Incoming Requests</h1>
    </>
  );
}

export default IncomingRequestInfo;