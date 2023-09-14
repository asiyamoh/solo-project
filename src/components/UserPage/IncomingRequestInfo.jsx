import { useSelector } from "react-redux";

function IncomingRequestInfo() {
  const incomingRequest = useSelector((store) => store.incomingRequests);
  console.log("almost there:", incomingRequest);

  const handleAccpet = () => {
    console.log('Clicked on accept!');
  }

  const handleDecline = () => {
    console.log('Clicked on decline!');
  }

  return (
    <>
      <h1>Incoming Requests</h1>

      {incomingRequest.map((incoming) => {
        return (
          <>
            <div>
                {incoming.first_name}
                <button onClick={handleAccpet}>Accept</button>
                <button onClick={handleDecline}>Decline</button>
            </div>

          </>
        );
      })}

    </>
  );
}

export default IncomingRequestInfo;
