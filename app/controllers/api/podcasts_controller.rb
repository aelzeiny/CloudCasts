require_relative '../concerns/itunes_rss_api'

class Api::PodcastsController < ApplicationController

  # HELPER API: https://github.com/rlivsey/itunes-search-api
  def search
    search_params = {
      country: 'US',
      media: 'podcast',
      entry: 'podcast',
      term: params[:term]
    }
    # encoding: utf-8 so no errors will be thrown
    encoded = encode_params(search_params)
    @response = ITunesSearchAPI.search(encoded)
    render :search
  end

  def top(genre_id = 0)
    @response =  (genre_id > 0) ?
      ITunesRssAPI.top_podcasts(100, genre_id) : ITunesRssAPI.top_podcasts(100)
    render :top
  end

  private

  def encode_params(myParam)
    nextParam = {}
    myParam.each do |key, val|
      nextParam[key] = val.force_encoding(Encoding::UTF_8)
    end
    nextParam
  end
end
