Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  resources :courses, only: [:index]
  resources :tee_boxes, only: [:index, :show, :create]
  resources :holes, only: [:index, :create]
  

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
