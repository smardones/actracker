import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    obtainedBugs: [],
    obtainedFish: [],
    obtainedSeaCreatures: [],
    obtainedFossils: [],
    obtainedArt: []
}

const store = createStore()



