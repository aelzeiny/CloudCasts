import {
  RECEIVE_SUBSCRIPTIONS,
  RECEIVE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION
} from '../actions/subscription_actions';
import merge from 'lodash/merge';

export default function(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SUBSCRIPTIONS:
      const answer = {};
      for(let i=0;i<action.subscriptions.length;i++) {
        var curr = action.subscriptions[i];
        answer[curr.podcast_id] = curr;
      }
      return answer;
    case RECEIVE_SUBSCRIPTION:
      const mdup = merge({}, state);
      mdup[action.subscription.podcast_id] = action.subscription;
      return mdup;
    case REMOVE_SUBSCRIPTION:
      const dup = merge({}, state);
      delete dup[action.subscription.podcast_id]
      return dup;
    default:
      return state;
  }
}
