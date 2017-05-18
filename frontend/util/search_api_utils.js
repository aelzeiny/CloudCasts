export const topPodcasts = function(genreId, size = 100) {
  let url = `/api/podcasts/top?${size}`;
  if(genreId)
    url += '&genre_id=' + genreId;
  // look into response.feed for array of itunes objects
  return $.ajax({
    url: url,
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
