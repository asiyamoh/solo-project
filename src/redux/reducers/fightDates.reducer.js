const fightDates = (state = [], action ) => {
    if(action.type === 'DATES'){
        return action.payload
    }
    return state
}

export default fightDates