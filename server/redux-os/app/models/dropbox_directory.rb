# typed: true
class DropboxDirectory
  def initialize(directory_path)
    @directory_path = directory_path
    @directory_path.sub!(/\A\//, '')
    @dropbox_api_client = BanalDropboxApi.new
  end

  def entries
    dropbox_folder_path = @dropbox_api_client.team_folder_path
    if @directory_path.present?
      dropbox_folder_path += '/'
      dropbox_folder_path += @directory_path
    end

    entries_parsed_json = @dropbox_api_client
      .client
      .list_folder(dropbox_folder_path)
      .instance_variable_get(:@data)["entries"]
  end
end