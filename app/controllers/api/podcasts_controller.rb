require_relative '../concerns/itunes_rss_api'

class Api::PodcastsController < ApplicationController
  def search
    @response = ITunesRssAPI.search_podcasts(params[:term])
    render :search
  end

  def top
    @response =  params.has_key?(:id) ?
      ITunesRssAPI.top_podcasts(100, params[:genre_id].to_i)
      : ITunesRssAPI.top_podcasts(100)
    render :top
  end

  def show
    @podcast = ITunesRssAPI.lookup_podcast(params[:itunes_id])
    render json: @podcast
    # # @podcast = Podcast.find_by(itunes_id: [params[:id]])
    # # if(@podcast)
    # #
  end
end
