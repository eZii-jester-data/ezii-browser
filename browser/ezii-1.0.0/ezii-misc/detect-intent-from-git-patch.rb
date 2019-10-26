require 'sinatra'
require 'json'
require 'wit'

set :protection, :except => :frame_options
set :bind, '0.0.0.0'

ENV['WIT_AI_TOKEN'] = "NKALLR6ED2Q7EI3PH4URT7Y7FQMJWM4P"

REPO_PATHS = [
  'tootsuite/mastodon',
  'rails/rails',
  'facebook/relay',
  'tensorflow/tensorflow'
]


search_terms = ["machine+learning", "rails"]
repos_json = `curl -u ezii123:b6c3c55c3307e21f9c7f387bcc4d3ae38a30e412 https://api.github.com/search/repositories?q=#{search_terms.sample}&sort=updated`
parsed_json = JSON.parse(repos_json)

parsed_json["items"].each do |repo_hash|
	REPO_PATHS.push(repo_hash["full_name"])
end

get '/' do

  case params[:message]
  when 'do something'
    json = `curl -u ezii123:b6c3c55c3307e21f9c7f387bcc4d3ae38a30e412 https://api.github.com/repos/#{REPO_PATHS.sample}/commits/master`
    parsed_json = JSON.parse(json)
    p parsed_json
    message = parsed_json["files"][0]["patch"].to_s

    client = Wit.new(access_token: ENV["WIT_AI_TOKEN"])
    response = client.message(message)

    return response.to_s
  when "ezii-dev what are you doing?"
    # return "Help with development of eezi-ruby"
    erb :index, :locals => { host: request.host }
  # when /.*608730770953076786.*debug.*`(.*)`.*/
  #   erb :minimalistic_debug, :locals => { code: $1 }
  #   # return "ohohohoho you fool I\'M UR MASTER'"
  end
end
