import { useSelector, useDispatch } from "react-redux";

function IncomingRequestInfo() {
  const dispatch = useDispatch();
  const incomingRequest = useSelector((store) => store.incomingRequests);
  console.log("almost there:", incomingRequest);

  const handleAccpet = (acceptedFight) => {
    console.log("Clicked on accept!");
    console.log('Event ACCEPT:', acceptedFight)
    dispatch({
        type:'ACCEPT_REQUEST',
        payload:acceptedFight
    })
  };

  const handleDecline = (declineFight) => {
    console.log("Clicked on decline!");
    console.log('Event:', declineFight);
    dispatch({
      type:'DECLINE_REQUEST',
      payload:declineFight
    })
  };

  return (
    <>
      <h1>Incoming Requests</h1>

      {incomingRequest.map((incoming) => {
        return (
          <>
            <div>
              <h3>
                {incoming.member1_firstname} {incoming.member1_lastname}
                {" VS "}
                {incoming.member2_firstname} {incoming.member2_lastname}
              </h3>
              <button onClick={() => handleAccpet(incoming)} >Accept</button>
              <button onClick={() => handleDecline(incoming)}>Decline</button>
            </div>
          </>
        );
      })}
    </>
  );
}

export default IncomingRequestInfo;
