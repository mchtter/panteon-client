import * as types from "../actions/types"

const initialState = {
    players: []
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PLAYERS:
            return {
                ...state,
                players: action.payload
            }

        case types.INCREASE_SCORE:
            return {
                ...state,
                players: action.payload
            }
        case types.INCREASE_SCORE:
            return {
                ...state,
                players: action.payload
            }
    
        default:
            return {
                ...state
            }
    }
}

export default playerReducer