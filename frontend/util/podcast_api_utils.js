export const showPodcast = function(id) {
  return $.ajax({
    url: `/api/podcasts/${id}`,
    method: 'GET'
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

export const subscribe = function(user_id, podcast_id) {
  return $.ajax({
    method: 'POST',
    url: 'api/subscriptions',
    type: 'json',
    data: {
      subscription: {
        user_id: user_id,
        podcast_id: podcast_id
      }
    }
  });
};

export const unsubscribe = function(user_id, podcast_id) {
  return $.ajax({
    method: 'DELETE',
    url: 'api/subscriptions',
    type: 'json',
    data: {
      subscription: {
        user_id: user_id,
        podcast_id: podcast_id
      }
    }
  });
};
