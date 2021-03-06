import * as APIUtil from '../util/podcast_api_utils';

export const RECEIVE_PODCAST = "RECEIVE_PODCAST";
export const RECEIVE_EPISODE = "RECEIVE_EPISODE";

export const receiveEpisode = (episode, podcast) => ({
  type: RECEIVE_EPISODE,
  episode,
  podcast
});

export const receivePodcast = (podcast) => ({
  type: RECEIVE_PODCAST,
  podcast
});

export const showPodcast = (itunesId) => dispatch => {
  return (APIUtil.ensurePodcast(itunesId).then(wait =>
    APIUtil.showPodcast(itunesId).then(
      data => dispatch(receivePodcast(data))
    )
  ));
};
