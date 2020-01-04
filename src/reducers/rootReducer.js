import { combineReducers } from 'redux';
import twitterFeedReducer from './twitterFeedReducer';
import movieDetailsReducer from './movieDetailsReducer';
import listMoviesReducer from './listMoviesReducer';

export default combineReducers({
    twitterFeedReducer,
    movieDetailsReducer,
    listMoviesReducer
})