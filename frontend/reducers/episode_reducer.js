import {RECEIVE_EPISODE} from '../actions/podcast_actions';

export default function(state = null, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EPISODE:
      return action.episode;
    default:
      return state;
  }
}
