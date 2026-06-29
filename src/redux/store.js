import { createStore, combineReducers } from 'redux';
import { movieReducer, songReducer } from './reducers';

const rootReducer = combineReducers({
  movies: movieReducer,
  songs: songReducer
});

export const store = createStore(rootReducer);

export default store;
