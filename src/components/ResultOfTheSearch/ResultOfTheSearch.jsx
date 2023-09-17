import { useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function ResultOfTheSearch() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [specificMember, setSpecificMember] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const resultStore = useSelector((store) => store.search);
  console.log("the store bro:", resultStore);

  const specificStore = useSelector((store) => store.getSpecific);
  console.log("the store hey:", specificStore);

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <h1>Result of the search</h1>
      <div>
        {resultStore.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>
              {resultStore.map((search) => {
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

export default ResultOfTheSearch;
