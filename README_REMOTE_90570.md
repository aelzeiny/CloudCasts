# CloudCasts ReadMe

**CloudCasts** is a podcast streaming app featuring original UI and mobile-responsive design. The backend leverages **Ruby on Rails v5** and
**PostgreSQL** for API querying and storage. The front-end utilizes **React/Redux**, the new **Bootstrap v4 - alpha 6**, and **ES6**.

Explore some great podcasts live at: **http://commutecasts.herokuapp.com**

## Backend Features and Implementation

### ITunes Search API
Unfortunately, there is no complete, reputable directory for all functioning
podcasts, and submitting a *'GET'* request with a search term to ITunes
is as close as we can manage. This is how we can get very basic Podcast
information given a search term.

```Ruby
def self.search_podcasts(term)
  search_params = {
    country: 'US',
    media: 'podcast',
    entry: 'podcast',
    term: term
  }

  getReq = HTTParty.get("https://itunes.apple.com/search", query: search_params)
  return JSON.parse(getReq.parsed_response)["results"]
end
```

#### iTunes RSS Feed Standard (provided by host)
The ITunes search API returns the host's RSS feed location, which can be
used to fetch more information about the podcast (episode, description, sub-categories, etc).

The Feedjira gem comes with a parser that makes parsing ITunes RSS-formatted XML rather quite trivial. Behold:
```Ruby
  def self.parse_feed(url)
    xml = HTTParty.get(url).body
    Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, xml)
  end
```

### Dynamically Cacheing Podcast Searches
With no way to directly obtain all podcast information from itunes, this
app must make do with lazy-storage. Each time a new podcast is 'discovered'
by a user, relevant ITunes info is received and stored into the backend.
This allows for quicker, and more optimized queries
in the future.

**Javascript**
```Javascript
export const showPodcast = (itunesId) => dispatch => {
  return (APIUtil.ensureAndShowPodcast(itunesId)
    .then(data => dispatch(receivePodcast(data)))
  );
};
```
**Ruby**
```Ruby
def ensure_create
  @pod = Podcast.find_by(itunes_id: params[:id])
  unless @pod
    lookup_values = ITunesRssAPI.lookup_podcast(params[:id])
    @pod = create_podcast(parse_lookup(lookup_values))
  end
  render :create
end
```

#### Lazy Syncing with ITunes
When a user revisits a podcast page that has has not been refreshed in
12-hours, the backend will make another query to ensure the information
is up-to-date
```Ruby
  def self.lookup_podcast(itunes_id)
    url = "https://itunes.apple.com/lookup?id=#{itunes_id}"
    getReq = HTTParty.get(url)
    return JSON.parse(getReq.parsed_response)["results"].first
  end
```

## Frontend Features and Implementation

#### Custom HTML 5 Player & Vibrant.js for image sampling
Vibrant is a library that is used for finding prominant colors in images
based on category. The desired effect was acheived after some tinkering
and experimentation.

#### Responsive Design
Looking great on mobile isn't optional anymore. Especially with audio-based
mediums. This project was created with Bootstrap v4 Alpha, and even makes
some custom components to ensure user experience. I am especially happy
with this NavBar
