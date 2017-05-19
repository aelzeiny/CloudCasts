require_relative '../concerns/itunes_rss_api'

class Api::PodcastsController < ApplicationController
  def search
    @response = ITunesRssAPI.search_podcasts(params[:term])
    render :search
  end

  def top
    @response =  params.has_key?(:genre_id) ?
      ITunesRssAPI.top_podcasts(100, params[:genre_id].to_i)
      : ITunesRssAPI.top_podcasts(100)
    render :top
  end
end
