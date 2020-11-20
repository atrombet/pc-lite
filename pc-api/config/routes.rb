Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :services
      resources :positions, only: [:show, :create, :update, :destroy]
      resources :people
    end
  end
end
