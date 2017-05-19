export const topGenres = {
  "Arts": 1301,
  "Business": 1321,
  "Comedy": 1303,
  "Education": 1304,
  "Games & Hobbies": 1323,
  "Government & Organizations": 1325,
  "Health": 1307,
  "Kids & Family": 1305,
  "Music": 1310,
  "News & Politics": 1311,
  "Religion & Spirituality": 1314,
  "Science & Medicine": 1315,
  "Society & Culture": 1324,
  "Sports & Recreation": 1316,
  "Technology": 1318,
  "Film": 1309
};

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

export const searchPodcasts = (term, genre) => {
  let searchPods = $.ajax({
    url: `/api/podcasts/search?term=${term}`,
    method: 'GET'
  });
  console.log(term + " " + genre);
  if(genre)
    searchPods = searchPods.then(data => data.filter((cast) => {
      return cast.itunes_genres.includes(genre);
    }));
  return searchPods;
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
