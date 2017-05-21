require_relative '../concerns/itunes_rss_api'

class Api::PodcastsController < ApplicationController
  def create
    # first check if categories exist
    @pod = Podcast.new(podcast_params)
    if @pod.save
      params[:podcast][:itunes_genres].each do |itunes_id|
        categ = Category.find_by(itunes_id: itunes_id)
        if categ
          PodcastCategory.create(category_id: categ.id, podcast_id: @pod.id)
        end
      end
      render json: @pod
    else
      render json: @pod.errors.full_messages, status: 422
    end
  end

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

  #NB: Podcast Ids are based on itunes ids
  def show
    @podcast = ITunesRssAPI.lookup_podcast(params[:id])
    render :show
  end

  private

  def podcast_params
    params.require(:podcast).permit(:name, :category, :itunes_id, :publisher, :image_url, :sm_image_url, :md_image_url)
  end
end
