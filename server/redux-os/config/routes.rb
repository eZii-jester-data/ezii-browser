# typed: false
Rails.application.routes.draw do
  resources :makes
  resources :gltf_models do
    member do
      get 'textures/:texture_file_name', to: 'gltf_models#texture'
      get ':bin_file_name', to: 'gltf_models#bin'
    end
  end
  resources :stick_records
  resources :copies
  resources :user_text_copies do
    member do
      post :pasted_one
    end
  end
  
  resources :app_detection_strategies
  resources :app_detection_analyses
  resources :app_detections
  resources :local_law_pipelines
  resources :mercurials
  resources :hart_science_experiments
  resources :ezii_robot_experiments
  resources :ezii_refactoring_combies
  resources :ezii_geminators
  resources :big_discrete_modules
  resources :ezii_seeds
  resources :kmz_models
  resources :ezii_cities
  resources :widgets
  resources :ezii_adult_verify_and_signins
  resources :whitelabel_system_extensions
  resources :ezii_zappings
  resources :ezii_teamworks
  resources :ezii_delta_directions
  resources :ezii_delta_gits
  mount Blazer::Engine, at: "blazer"
  mount Searchjoy::Engine, at: "searchjoy"


  resources :visualizations
  resources :waymo_slomos
  resources :banal_complexes
  resources :comments
  resources :address_searches
  namespace :banal do
    resources :employees
  end
  resources :employees
  namespace :banal do
    resources :related_objects
  end
  namespace :banal do
    resources :metadata
  end
  namespace :banal do
    resources :links
  end
  namespace :banal do
    resources :documents
  end
  namespace :banal do
    resources :projects
  end
  namespace :banal do
    resources :brainstorms do
      member do
        put :make_project
      end
    end
  end
  resources :tasks
  resources :cookie_changes
  resources :types
  resources :code_link_types
  resources :code_links
  resources :code_link_batches
  resources :codes
  resources :apis
  resources :basecamp_integrations
  namespace :partners do
    resources :get_paids
  end
  resources :searches
  resources :code_change_requests
  resources :banal_business_testcases
  resources :file_systems
  resources :wit_ai_parse_model_examples
  resources :wit_ai_parse_models
  scope format: false do
    defaults format: 'html' do
      resources :ezii_os_files, constraints: { id: /.+/ }
    end
  end
  resources :ezii_integrations
  resources :directories, constraints: { id: /.*/ }
  resources :unzips
  get 'imported_data/overview'

  root to: 'imported_data#overview'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
