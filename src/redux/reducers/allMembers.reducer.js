const allMembers = (state = [], action) => {
    if(action.type === 'ALL_MEMBERS'){
        return action.payload;
    }
    return  state;
}

export  default allMembers