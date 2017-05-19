import merge from 'lodash/merge';

import {RECEIVE_PODCASTS, RECEIVE_TOP_PODCASTS} from '../actions/search_actions';

const initState = [];
const PodcastReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PODCASTS:
      return arrToObj(action.podcasts);
    default:
      return state;
  }
}

function arrToObj(arr) {
  let obj = {};
  for(let i=0;i<arr.length;i++){
    obj[arr[i].itunes_id] = arr[i];
  }
  obj.originalArray = arr;
  return obj;
}

export default PodcastReducer;
