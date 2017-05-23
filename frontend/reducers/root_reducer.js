import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PodcastsReducer from './podcasts_reducer';
import EpisodeReducer from './episode_reducer';
import SubscriptionReducer from './subscription_reducer';
import PodcastReducer from './podcast_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,

  episode: EpisodeReducer,
  podcast: PodcastReducer,
  podcasts: PodcastsReducer,

  subscriptions: SubscriptionReducer
});

export default RootReducer;
