import {RECEIVE_PODCAST} from '../actions/podcast_actions';

export default function(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PODCAST:
    console.log("RECEIVE CAST");
      return action.podcast;
    default:
      return state;
  }
}
