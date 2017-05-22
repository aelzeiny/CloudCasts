import {RECEIVE_SUBSCRIPTIONS} from '../actions/podcast_actions';
export default function(state, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SUBSCRIPTIONS:
      const answer = {};
      for(let i=0;i<action.subscriptions.length;i++) {
        var curr = action.subscriptions[i];
        answer[curr.podcast_id] = curr;
      }
      return action.subscriptions
    default:
      return state;
  }
}
