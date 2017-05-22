import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PodcastsReducer from './podcasts_reducer';
import SubscriptionReducer from './subscription_reducer';
import PodcastReducer from './podcast_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  podcasts: PodcastReducer,
  subscriptions: SubscriptionReducer,
  podcast: PodcastReducer
});

export default RootReducer;
