const RequestMatchInput = (state = {
    member: '',
    date: ''
}, action) => {
    if (action.type === 'CHOSEN_MEMBER') {
        return {
            ...state,
            member: action.payload
        }
    }
    if (action.type === 'CHOSEN_DATE') {
        return{
            ...state,
            date: action.payload
        }
    }
    return state
}

export default RequestMatchInput