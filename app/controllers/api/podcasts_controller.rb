class Api::PodcastsController < ApplicationController
  # HELPER API: https://github.com/rlivsey/itunes-search-api
  def search
    p "WHAT?!?";
    # render json: params
    myParam = {
      country: 'US',
      media: 'podcast',
      entry: 'podcast',
      term: params[:term]
    }
    render json: ITunesSearchAPI.search(search_params(myParam))
  end

  private

  def search_params(myParam)
    nextParam = {}
    myParam.each do |key, val|
      nextParam[key] = val.force_encoding("UTF-8")
    end
    nextParam
  end
end
