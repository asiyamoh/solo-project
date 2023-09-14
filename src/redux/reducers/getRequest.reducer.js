const getRequest = (state = [], action) => {
    if(action.type === 'GET_REQUEST_MATCH'){
        console.log('asiya',action.payload);
        return action.payload
    }
    return state
}

export default getRequest