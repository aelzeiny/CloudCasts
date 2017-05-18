import merge from 'lodash/merge';

import {RECEIVE_SEARCH_PODCASTS, RECEIVE_TOP_PODCASTS} from '../actions/search_actions';

const initState = [];
const PodcastReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_PODCASTS:
      return action.podcasts;
    case RECEIVE_TOP_PODCASTS:
      return action.podcasts;
    default:
      return state;
  }
}

export default PodcastReducer;
