import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function Result() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState([]);

  const allMembersStore = useSelector((store) => store.allMembers);
  console.log("All:", allMembersStore);

  const searchInputStore = useSelector((store) => store.inputSearch);
  console.log("Search INPUTTTT:", searchInputStore);

  const search = () => {
    console.log("we heree");
    if (loading) {
      console.log("loading", loading);
    } else {
      const filtered = allMembersStore.filter((member) => {
        console.log("also here");
        console.log("Members", member.age);
        console.log("input:", searchInputStore.age);
        if (
          searchInputStore.weight1 < member.weight_class &&
          member.weight_class < searchInputStore.weight2 &&
          member.region === searchInputStore.region &&
          member.fight_count === searchInputStore.numOfFights &&
          member.gender == searchInputStore.gender &&
          member.age >= searchInputStore.age
        ) {
          return true;
        }
      });
      setFilteredMembers(filtered);
      console.log("filtered", filteredMembers);
    }
  };

  useEffect(() => {
    dispatch({
      type: "GET_ALL_MEMBERS",
    });
    search();
  }, []);

  useEffect(() => {
    if (allMembersStore.length > 0) {
      setLoading(false);
    }
  }, [allMembersStore]);

  return (
    <>
      <h1>RESULT</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {filteredMembers.map((member) => (
            <div key={member.id}>
              <h2>{member.name}</h2>
              <p>Gender: {member.gender}</p>
              <p>Age: {member.age}</p>
              <p>Region: {member.region}</p>
              <p>Weight Class: {member.weight_class}</p>
              <p>fight Count: {member.fight_count}</p>
              {/* Add more information to display here */}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Result;
