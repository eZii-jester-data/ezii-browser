json.extract! address_search, :id, :sentiment, :search_string, :created_at, :updated_at
json.url address_search_url(address_search, format: :json)
