import TOGGLE_BUG from './actions'

const initialState = {
    obtainedBugs: [],
    obtainedFish: [],
    obtainedSeaCreatures: [],
    obtainedFossils: [],
    obtainedArt: []
}


export const reducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_BUG') {
        return {
            ...state,
            obtainedBugs: [...obtainedBugs, action.]
            
        }
    }
}

export default reducer;