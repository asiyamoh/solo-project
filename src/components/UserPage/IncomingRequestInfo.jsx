import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function IncomingRequestInfo() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [moreDetails, setMoreDetails] = useState('')

  const incomingRequest = useSelector((store) => store.incomingRequests);
  console.log("almost there:", incomingRequest);

  const handleAccpet = (acceptedFight) => {
    console.log("Clicked on accept!");
    console.log("Event ACCEPT:", acceptedFight);
    dispatch({
      type: "ACCEPT_REQUEST",
      payload: acceptedFight,
    });
    handleClose();
  };

  const handleDecline = (declineFight) => {
    console.log("Clicked on decline!");
    console.log("Event:", declineFight);
    dispatch({
      type: "DECLINE_REQUEST",
      payload: declineFight,
    });
  };

  const handleClick = (incoming) => {
    console.log("Clicked", incoming);
    setMoreDetails(incoming);
    console.log('details:', moreDetails)
    handleOpen();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    bgcolor:"white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <h1>Incoming Requests</h1>

      {incomingRequest.map((incoming) => {
        return (
          <>
            <div>
              <Button onClick={() => handleClick(incoming)}>
                <h3>
                  {incoming.member1_firstname} {incoming.member1_lastname}
                  {" VS "}
                  {incoming.member2_firstname} {incoming.member2_lastname}
                </h3>
              </Button>
              <div>
                <button onClick={() => handleAccpet(incoming)}>Accept</button>
                <button onClick={() => handleDecline(incoming)}>Decline</button>
              </div>
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
                    {moreDetails ? (
                      <h3>
                        {/* return specific detalis of the boxer */}
                        {moreDetails.member2_firstname} {moreDetails.member2_lastname}
                        <div>Weight class: {moreDetails.member2_weightclass}</div>
                        Fight count: {moreDetails.member2_fightcount}
                        <div>Location: {moreDetails.fight_date_location}</div>
                        <div>Date: {moreDetails.fight_date}</div>
                      </h3>
                    ) : (
                      <p>Loading...</p>
                    )}
                  <button onClick={() => handleAccpet(incoming)}>Accept</button>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </>
        );
      })}
    </>
  );
}

export default IncomingRequestInfo;
