import ADD_BUG from './actions'

const initialState = {
    obtainedBugs: [],
    obtainedFish: [],
    obtainedSeaCreatures: [],
    obtainedFossils: [],
    obtainedArt: []
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BUG':
        return {
            ...state,
            obtainedBugs: [...obtainedBugs, action.payload]
            
        }

        default: return state
    }
}

export default reducer;