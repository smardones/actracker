import { isDefinitionNode } from 'graphql'
import {ADD_BUG, REMOVE_BUG } from './actions'


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
        case 'REMOVE_BUG': {
            const id = action.bugId;
            return {
                ...state,
                obtainedBugs: state.obtainedBugs.filter(item => item !== id)
            }
        }

        default: return state
    }
}

export default reducer;