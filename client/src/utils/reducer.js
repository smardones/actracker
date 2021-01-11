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
        case 'ADD_FISH': {
            const id = action.fishId;
            return {
                ...state,
                obtainedFish: [...state.obtainedFish, id]
            }
        }
        case 'REMOVE_FISH': {
            const id = action.fishId;
            return {
                ...state,
                obtainedFish: state.obtainedFish.filter(item => item !== id)
            }
        }
        case 'ADD_FOSSIL': {
            const id = action.fossilId;
            return {
                ...state,
                obtainedFossils: [...state.obtainedFossils, id]
            }
        }
        case 'REMOVE_FOSSIL': {
            const id = action.fossilId;
            return {
                ...state,
                obtainedFossils: state.obtainedFossils.filter(item => item !== id)
            }
        }
        

        default: return state
    }
}

export default reducer;