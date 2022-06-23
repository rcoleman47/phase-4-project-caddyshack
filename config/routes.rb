Rails.application.routes.draw do
  resources :users, only: [:show, :create]

  resources :courses, only: [:index, :show, :create, :update]
  resources :tee_boxes, only: [:index, :show, :create, :update]
  resources :holes, only: [:index, :show, :update]

  get '/authorized_user', to: 'users#show'

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
