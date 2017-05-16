const RSS_TOP_100 = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/json';

export const top100Podcasts = function() {
  // look into response.feed for array of itunes objects
  return $.ajax({
    url: RSS_TOP_100,
    method: 'GET',
    dataType: 'json'
  });
}

export const queryController = (term) => {
  return $.ajax({
    url: '/api/podcasts',
    method: 'POST',
    data: {
      term: term
    }
  });
}

export const searchITunes = (term) => {
  const itunes = new ITunesUrlConstructor(term);
  return $.ajax({
    url: itunes.url,
    method: 'GET'
  });
}

class ITunesUrlConstructor {
  constructor(term) {
    this.url = 'https://itunes.apple.com/search?country=US';
    this.add("term", term);
    this.add("media", "podcast");
    this.add("entity", "podcast");
  }
  limit(num) {
    this.add("limit", num);
  }
  explicit(bool) {
    this.add("explicit", bool ? "Yes" : "No");
  }
  add(key, value) {
    this.url += `&${key}=${value}`;
  }
}
