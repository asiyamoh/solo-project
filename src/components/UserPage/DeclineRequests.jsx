import { useSelector } from "react-redux";

function DeclineRequests() {
  const declineStore = useSelector((store) => store.getDeclineRequest);
  console.log("the DeclineStore:", declineStore);
  return (
    <>
      <h1>Decline Requests</h1>
      <div>
        {declineStore.map((decline) => {
          return (
            <>
              <h3>
                <div>
                    {decline.member1_firstname} {decline.member1_lastname}
                    {" VS "}
                    {decline.member2_firstname} {decline.member2_lastname}
                    <div>
                        {" Fight Status:"} {decline.fight_status}
                    </div>
                </div>
              </h3>
            </>
          );
        })}
      </div>
    </>
  );
}

export default DeclineRequests;
