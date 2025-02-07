import { useSelector } from "react-redux";

function RequestInfo() {
  const requests = useSelector((store) => store.getRequest);
  console.log("store Request:", requests);

  return (
    <>
      <h1>Requsted waitting </h1>

      <div className="block">
        {requests.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>
              {requests.map((request) => {
                return (
                  <div>
                    <h3>
                      {request.member1_firstname} {request.member1_lastname}
                      {" VS "}
                      {request.member2_firstname} {request.member2_lastname}
                      <div>
                        {" Fight Status: "}
                        {request.fight_status}
                      </div>
                    </h3>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default RequestInfo;
