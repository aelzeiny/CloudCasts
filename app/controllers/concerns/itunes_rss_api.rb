class ITunesRssAPI
  def self.top_podcasts(size=100, genre_id=0, explicit=false, format="json")
    url = "https://itunes.apple.com/us/rss/toppodcasts/limit=#{size}/"
    if genre_id > 0
      url += "genre=#{genre_id}/"
    end
    if explicit
      url += "explicit=true/"
    end
    url += "#{format}"
    return JSON.parse(HTTParty.get(url).parsed_response)
  end

  def self.lookup_podcast(itunes_id)
    url = "https://itunes.apple.com/lookup?id=#{itunes_id}"
    getReq = HTTParty.get(url)
    return JSON.parse(getReq.parsed_response)["results"].first
  end

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

  def self.parse_feed(url)
    xml = HTTParty.get(url).body
    Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, xml)
  end
end
