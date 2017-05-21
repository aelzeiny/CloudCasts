import * as APIUtil from '../util/podcast_api_utils';


export const RECEIVE_PODCAST = "RECEIVE_PODCAST";
export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";

export const receivePodcast = (podcast) ({
  type: RECEIVE_PODCAST,
  podcast
});

export const receiveSubscriptions = (subscriptions) ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions
});

export const showPodcast = (itunesId) => dispatch => (
  APIUtil.ensurePodcast(itunesId).then(
    APIUtil.showPodcast(itunesId).then(
      data => receivePodcast(data)
    )
  );
);

export const subscribeToPodcast = (userId, podcastId) => dispatch => ({
  APIUtil.ensurePodcast(podcastId).then(
    APIUtil.subscribe(userId, podcastId).then(
      data => dispatch(receiveSubscriptions(data))
    )
  )
});

export const unsubscribeFromPodcast = (subId) => dispatch => ({
  APIUtil.unsubscribe(subId).then(
    data => dispatch(receiveSubscriptions(data))
  )
});
