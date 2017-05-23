import {RECEIVE_EPISODE} from '../actions/podcast_actions';

export default function(state, action) {
  case RECEIVE_PLAY:
    return action.episode;
  case default:
    return state;
}
