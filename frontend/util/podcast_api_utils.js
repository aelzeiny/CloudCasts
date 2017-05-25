export const showPodcast = function(id) {
  return $.ajax({
    url: `/api/podcasts/${id}`,
    method: 'GET'
  });
};

export const ensurePodcast = function(id) {
  return $.ajax({
    url: `/api/podcasts/ensure/${id}`,
    method: 'POST'
  });
};

export const createPodcast = function(data) {
  return $.ajax({
    url: '/api/podcasts',
    method: 'POST',
    data: {podcast: data},
    type: 'json'
  });
};

export const fetchSubscriptions = function() {
  return $.ajax({
    method: 'GET',
    url: '/api/subscriptions'
  });
};

export const subscribe = function(podcastId) {
  return $.ajax({
    method: 'POST',
    url: 'api/subscriptions',
    type: 'json',
    data: {
      subscription: {
        podcast_id: podcastId
      }
    }
  });
};

export const unsubscribe = function(subId) {
  return $.ajax({
    method: 'DELETE',
    url: `api/subscriptions/${subId}`
  });
};

export const timeline = function(podcastIds) {
  return $.ajax({
    method: 'POST',
    url: 'api/podcasts/timeline',
    type: 'json',
    data: {
      podcast_ids: podcastIds
    }
  });
};
