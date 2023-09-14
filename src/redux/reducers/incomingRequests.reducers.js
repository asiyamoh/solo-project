const incomingRequests = (state = [], action) => {

  if (action.type === 'INCOMING_REQUESTS') {
    return action.payload;
  }

  return state;
};

export default incomingRequests;
