import { useSelector, useDispatch} from "react-redux";

function DeclineRequests() {
  const dispatch = useDispatch();
  const declineStore = useSelector((store) => store.getDeclineRequest);
  console.log("the DeclineStore:", declineStore);

  const handleDelete = (declineFight) => {
    console.log('The decline Fight:', declineFight.fight_id)
    dispatch({
      type: 'HANDLE_DECLINE',
      payload: declineFight.fight_id
    })
  }

  return (
    <>
      <h1>Decline Requests</h1>
      <div>
        {declineStore.map((decline) => {
          return (
            <>
              <h3>
                    {decline.member1_firstname} {decline.member1_lastname}
                    {" VS "}
                    {decline.member2_firstname} {decline.member2_lastname}
                    <div>
                        {" Fight Status:"} {decline.fight_status}
                    </div>
                <button onClick={() => handleDelete(decline)}>DELETE 🗑️</button>
              </h3>
            </>
          );
        })}
      </div>
    </>
  );
}

export default DeclineRequests;
