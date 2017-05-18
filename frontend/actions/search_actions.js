import * as APIUtil from '../util/search_api_utils';

export const RECEIVE_SEARCH_PODCASTS = "RECEIVE_SEARCH_PODCASTS";
export const RECEIVE_TOP_PODCASTS = "RECEIVE_TOP_PODCASTS";

export const receiveSearchPodcasts = (podcasts) => ({
  type: RECEIVE_SEARCH_PODCASTS,
  podcasts
});

export const receiveTopPodcasts = (podcasts) => ({
  type: RECEIVE_TOP_PODCASTS,
  podcasts
});

export const searchPodcasts = searchTerm => dispatch => (
  APIUtil.searchPodcasts(searchTerm)
    .then(data => dispatch(receiveSearchPodcasts(data)))
);

export const requestTopPodcasts = (genreId = undefined, size = undefined) => dispatch => (
  APIUtil.topPodcasts(genreId, size)
    .then(data => dispatch(receiveTopPodcasts(data)))
);
