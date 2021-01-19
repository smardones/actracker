import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const persistedState = loadState();

const store = createStore(reducer, persistedState, composeWithDevTools());
store.subscribe(() => {
    saveState(store.getState());
  });
  
export default store


