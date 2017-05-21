Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :subscriptions, only: [:index, :create, :destroy]

    #NB: Podcasts Ids are actually based on Itunes Ids
    get '/podcasts/top', to: 'podcasts#top'
    get '/podcasts/search', to: 'podcasts#search'
    get '/podcasts/lookup/:id', to: 'podcasts#lookup'
    patch '/podcasts/ensure/:id', to: 'podcasts#ensure_create'
    resources :podcasts, only: [:show, :create]

    resource :session, only: [:create, :destroy]
  end
end
