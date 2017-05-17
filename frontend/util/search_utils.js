export const top100Podcasts = function() {
  // look into response.feed for array of itunes objects
  return $.ajax({
    url: `/api/podcasts/top`,
    method: 'GET',
  });
}

export const searchPodcasts = (term) => {
  return $.ajax({
    url: `/api/podcasts/search?term=${term}`,
    method: 'GET'
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
