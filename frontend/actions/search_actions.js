import * as APIUtil from '../util/search_api_utils';

export const RECEIVE_PODCASTS = "RECEIVE_PODCASTS";

export const receivePodcasts = (podcasts) => ({
  type: RECEIVE_PODCASTS,
  podcasts
});

export const searchPodcasts = searchTerm => dispatch => (
  APIUtil.searchPodcasts(searchTerm)
    .then(data => dispatch(receivePodcasts(data)))
);

export const requestTopPodcasts = (genreId = undefined, size = undefined) => dispatch => {
  return APIUtil.topPodcasts(genreId, size)
    .then(data => dispatch(receivePodcasts(data)));
};
