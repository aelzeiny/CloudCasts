Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    get '/podcasts/top', to: 'podcasts#top'
    get '/podcasts/:itunes_id', to: 'podcasts#show'
    get '/podcasts/search', to: 'podcasts#search'#, as: "podcasts"
  end
end
