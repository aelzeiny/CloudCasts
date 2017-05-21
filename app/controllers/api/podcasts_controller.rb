require_relative '../concerns/itunes_rss_api'

class Api::PodcastsController < ApplicationController
  def create
    # first check if categories exist
    @pod = Podcast.find_by(params[:itunes_id])
    if @pod
      render :create
      return;
    end
    @pod = Podcast.new(podcast_params)
    if @pod.save
      params[:podcast][:itunes_genres].each do |itunes_id|
        categ = Category.find_by(itunes_id: itunes_id)
        if categ
          PodcastCategory.create(category_id: categ.id, podcast_id: @pod.id)
        end
      end
      render :create
    else
      render :create
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
    @podcast = Podcast.find_by(itunes_id: params[:id])
    @feed = ITunesRssAPI.parse_feed(@podcast.feed_url) # parse_lookup(parse_lookup(@podcast))
    @episodes = []
    @feed.entries.each do |ep|
      episode = {
        title: ep.title,
        summary: ep.summary,
        published: ep.published,
        summary: ep.summary,
        audio: ep.enclosure_url,
        audio_type: ep.enclosure_type,
        audio_size: ep.enclosure_length,
        audio_length: ep.itunes_duration,
        audio_length: ep.itunes_duration
      }
      @episodes << episode
    end
    render :show
  end

  private

  def parse_lookup(pod)
    # json.name
    {
      name: pod["collectionName"],
      itunes_id: pod["collectionId"],
      publisher: pod["artistName"],
      itunes_genres: pod["genreIds"],
      image_url: pod["artworkUrl600"],
      sm_image_url: pod["artworkUrl30"],
      md_image_url: pod["artworkUrl100"],
      feed_url: pod["feedUrl"]
    }
  end

  def podcast_params
    params.require(:podcast).permit(:name, :category, :itunes_id, :publisher, :image_url, :sm_image_url, :md_image_url, :feed_url)
  end
end
