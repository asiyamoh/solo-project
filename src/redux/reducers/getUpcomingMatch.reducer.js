const getUpcomingMatch = (state = [], action) => {
    if(action.type === 'GET_UPCOMING'){
        return action.payload;
    }
    return state
}

export default getUpcomingMatch