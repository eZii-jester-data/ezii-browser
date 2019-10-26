json.extract! code, :id, :github_link, :gist_link, :code_links_id, :created_at, :updated_at
json.url code_url(code, format: :json)
