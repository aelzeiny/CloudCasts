import * as APIUtil from '../util/podcast_api_utils';

export const RECEIVE_PODCAST = "RECEIVE_PODCAST";
export const RECEIVE_EPISODE = "RECEIVE_EPISODE";
export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";

export const receiveEpisode = (episode, podcast) => ({
  type: RECEIVE_EPISODE,
  episode,
  podcast
});

export const receivePodcast = (podcast) => ({
  type: RECEIVE_PODCAST,
  podcast
});

export const receiveSubscriptions = (subscriptions) => ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions
});

export const showPodcast = (itunesId) => dispatch => {
  return (APIUtil.ensurePodcast(itunesId).then(wait =>
    APIUtil.showPodcast(itunesId).then(
      data => dispatch(receivePodcast(data))
    )
  ));
};

export const subscribeToPodcast = (podcastId) => dispatch => (
  APIUtil.ensurePodcast(podcastId).then( waiter =>
    APIUtil.subscribe(podcastId).then(
      data => dispatch(receiveSubscriptions(data)), err => console.log(err.responseText)
    )
  )
);

export const unsubscribeFromPodcast = (podcastId) => dispatch => (
  APIUtil.unsubscribe(podcastId).then(
    data => dispatch(receiveSubscriptions(data)), err => console.log(err.responseText)
  )
);

export const unsubscribeFromPodcastById = (subId) => dispatch => (
  APIUtil.unsubscribe(subId).then(
    data => dispatch(receiveSubscriptions(data))
  )
);
