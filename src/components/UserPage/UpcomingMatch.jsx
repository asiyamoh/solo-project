import { useSelector } from "react-redux";

function UpcomingMatch() {
  const upcomings = useSelector((store) => store.getUpcomingMatch);
  console.log("the store upcoming:", upcomings);

  const handleHappened = () => {
    console.log('Happened!');
    
  }

  return (
    <>
      <h1>Upcoming Match</h1>
      <div>
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
              <button onClick={handleHappened}>Happened</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UpcomingMatch;
