
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";
export const REMOVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
import * as APIUtil from '../util/podcast_api_utils';

export const receiveSubscription = (subscription) => ({
  type: RECEIVE_SUBSCRIPTION,
  subscription
});

export const receiveSubscriptions = (subscriptions) => ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions
});

export const removeSubscription = (subscription) => ({
  type: REMOVE_SUBSCRIPTION,
  subscription
});

export const fetchPodcasts = () => dispatch => (
  APIUtil.fetchSubscriptions().then(data => receiveSubscriptions(data))
);

export const subscribeToPodcast = (podcastId) => dispatch => (
  APIUtil.ensurePodcast(podcastId).then( waiter =>
    APIUtil.subscribe(podcastId).then(
      data => dispatch(receiveSubscriptions(data)), err => console.log(err.responseText)
    )
  )
);

export const unsubscribeFromPodcast = (subId) => dispatch => (
  APIUtil.unsubscribe(subId).then(
    data => dispatch(removeSubscription(data)), err => console.log(err.responseText)
  )
);

export const unsubscribeFromPodcastAt = (podcastId) => dispatch => (
  APIUtil.unsubscribe(podcastId).then(
    data => {console.log(data); return dispatch(receiveSubscription(data));}
  )
);
