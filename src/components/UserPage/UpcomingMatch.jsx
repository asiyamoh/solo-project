import { useSelector, useDispatch } from "react-redux";

function UpcomingMatch() {
  const  dispatch = useDispatch();
  const upcomings = useSelector((store) => store.getUpcomingMatch);
  console.log("the store upcoming:", upcomings);

  //🛑 need to do the happened button
  const handleHappened = (happenedMatch) => {
    console.log('Happened!', happenedMatch);
    dispatch({
      type:'HAPPENED_MATCH',
      payload: happenedMatch
    })
    
  }

  return (
    <>
      <h1>Upcoming Match</h1>
      <div  className="block">
        {upcomings.map((upcoming) => {
          return (
            <div>
              <h3>
                {upcoming.member1_firstname} {upcoming.member1_lastname}
                {" VS "}
                {upcoming.member2_firstname} {upcoming.member2_lastname}
              </h3>
              <div>
                <h3>Location: {upcoming.location}</h3>
                <h3>weigh in time: {upcoming.weigh_time}</h3>
                <h3>Door opens: {upcoming.show_time}</h3>
              </div>
              <button onClick={() => handleHappened(upcoming)}>Happened🗑️</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UpcomingMatch;
