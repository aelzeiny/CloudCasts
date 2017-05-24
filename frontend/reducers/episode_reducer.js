import {RECEIVE_EPISODE} from '../actions/podcast_actions';
import merge from 'lodash/merge';

export default function(state = null, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EPISODE:
      const newEpisode = merge({}, action.episode);
      newEpisode.podcast = action.podcast;
      return newEpisode;
    default:
      return state;
  }
}
