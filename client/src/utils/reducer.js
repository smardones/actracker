import ADD_BUG from './actions'

const initialState = {
    obtainedBugs: [],
    obtainedFish: [],
    obtainedSeaCreatures: [],
    obtainedFossils: [],
    obtainedArt: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BUG': {
            const id = action.bugId
            return {
                ...state,
                obtainedBugs: [...state.obtainedBugs, id]
                
            }
        }

        default: return state
    }
}

export default reducer;