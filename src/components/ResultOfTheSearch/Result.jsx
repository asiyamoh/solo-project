import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function Result() {
  const dispatch = useDispatch();
  const history =  useHistory();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loading, setLoading] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [specificMember, setSpecificMember] = useState('');

  const allMembersStore = useSelector((store) => store.allMembers);
  console.log("All:", allMembersStore);

  const searchInputStore = useSelector((store) => store.inputSearch);
  console.log("Search INPUTTTT:", searchInputStore);

  const specificStore = useSelector((store) => store.getSpecific);
  console.log("the store hey:", specificStore);

  const search = () => {
    console.log("we heree");
    if (loading) {
      console.log("loading", loading);
    } else {
      const filtered = allMembersStore.filter((member) => {
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
      dispatch({
        type: "GET_ALL_MEMBERS",
      });
    }
  };

  const handleClick = (id) => {
    console.log("I have been clicked!");
    console.log("event:", id);
    dispatch({
        type: "SPECIFIC",
        payload: id
    })
    setSpecificMember(specificStore);
    handleOpen();
  };

  const handleNext = () => {
    console.log('In the handleNext!');
    history.push("/request");
  }

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "grey",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <h1>RESULT</h1>
         <div>
        {filteredMembers.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>
              {filteredMembers.map((search) => {
                return (
                  <Button
                    onClick={() => handleClick(search.id)}
                    key={search.id}
                  >
                    <div>
                      <h3>
                        {search.firstname} {search.lastname}
                      </h3>
                    </div>
                  </Button>
                );
              })}
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <div>
                    {specificStore[0] ? (
                      <h3>
                        {/* return specific detalis of the boxer */}
                        {specificStore[0].firstname} {specificStore[0].lastname}
                        <div>Weight class: {specificStore[0].weight_class}</div>
                        Fight count: {specificStore[0].fights_count}
                      </h3>
                    ) : (
                      <p>Loading...</p>
                    )}
                    <button onClick={handleNext}>NEXT</button>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </>
        )}
      </div>
    </>
  );
}

export default Result;
