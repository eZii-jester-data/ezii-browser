# typed: true
class BanalDropboxApi
  attr_accessor :oauth_token, :client

  def initialize
    self.oauth_token = Rails.application.credentials.banal_dropbox_oauth_token

    # After oauth_token initialilzation, because the oauth_token is required 
    # when enabling dynamicly fetched (via api) values for the folllowing to instance variables
    @team_folder_id = "6139129136" # hardcoded to banal team folder for now
    @team_member_id = "dbmid:AABXMhNAuNmdg79aaoHQwu9PuuZeJM7yjFU" # hardcoded to my team member id for now

    self.instantiate_client
    self.inject_middleware # Dropbox Business API feature: https://github.com/Jesus/dropbox_api/issues/29
  end

  def get_file_path_for_id(dropbox_id)
    client.get_metadata(dropbox_id).path_lower
  end

  def team_folder_path
    "ns:#{@team_folder_id}"
  end

  def combined_path(path)
    team_folder_path + path
  end

  # Doesn't work, although it is expected to work by me 
  # https://www.dropbox.com/developers/documentation/http/documentation#sharing-create_shared_link_with_settings
  # If you can get this to work, you'l get a cookie 🍪
  # def get_link(path)
  #   client.create_shared_link_with_settings(combined_path(path))['url']
  # end

  def download(path, &block)
    client.download(combined_path(path), &block)
  end

  def hacky__business_api_team_members
    `
      curl -X POST https://api.dropboxapi.com/2/team/members/list \
        --header "Authorization: Bearer #{self.oauth_token}" \
        --header "Content-Type: application/json" \
        --data "{\\"limit\\": 100,\\"include_removed\\": false}"
    `
  end

  def hacky__business_api_team_folders
    `
      curl -X POST https://api.dropboxapi.com/2/team/team_folder/list \
        --header "Authorization: Bearer #{self.oauth_token}" \
        --header "Content-Type: application/json" \
        --data "{\\"limit\\": 100}"
    `
  end

  def instantiate_client
    @client = self.fresh_client
  end

  def fresh_client
    DropboxApi::Client.new(self.oauth_token)
  end

  def inject_middleware(middleware_injactable = self.client, select = :admin, team_member_id = @team_member_id)
    middleware_injactable.middleware.append do |connection|
      case select
      when :admin
        connection.headers['Dropbox-API-Select-Admin'] = team_member_id
      when :user
        connection.headers['Dropbox-API-Select-User'] = team_member_id
      end

      # This is essential in order to get a value for "path_lower" (#get_file_path_for_id)
      # it's a speciality because of the Business API and team folder
      connection.headers['Dropbox-API-Path-Root'] = '{".tag": "root", "root": "6139129136"}'
    end
  end
end