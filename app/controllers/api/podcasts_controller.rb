require_relative '../concerns/itunes_rss_api'

class Api::PodcastsController < ApplicationController

  # HELPER API: https://github.com/rlivsey/itunes-search-api
  def search
    @response = ITunesRssAPI.search_podcasts(params[:term])
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
