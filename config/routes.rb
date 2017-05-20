Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :subscriptions, only: [:show, :create, :destroy]
    end

    #NB: Podcasts Ids are actually based on Itunes Ids
    resources :podcasts, only: [:show, :create]
    get '/podcasts/top', to: 'podcasts#top'
    get '/podcasts/search', to: 'podcasts#search'

    resource :session, only: [:create, :destroy]
  end
end
