import * as types from "./types"

export const fetchPlayers = () => {
    return {
        type: types.FETCH_PLAYERS,
        payload: []
    }
}