import {RECEIVE_PODCAST} from '../actions/podcast_actions';

export default function(state, action) {
  switch(action.type) {
    case RECEIVE_PODCASTS:
      return action.podcast;
    default:
      return state;
  }
}
