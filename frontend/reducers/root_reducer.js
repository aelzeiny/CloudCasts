import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PodcastReducer from './podcasts_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  podcasts: PodcastReducer
});

export default RootReducer;
