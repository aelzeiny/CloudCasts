import values from 'lodash/values';

export const podcastsSelector = function(podcasts) {
  return values(podcasts.originalArray);
}
