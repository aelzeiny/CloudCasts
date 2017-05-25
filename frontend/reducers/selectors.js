import values from 'lodash/values';

export const podcastsSelector = function(podcasts) {
  return values(podcasts.originalArray);
};

export const subscriptionsSelector = function(subscriptions) {
  return values(subscriptions);
};
