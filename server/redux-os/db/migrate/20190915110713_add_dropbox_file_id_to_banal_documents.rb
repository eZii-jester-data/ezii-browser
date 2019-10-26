# typed: true
class AddDropboxFileIdToBanalDocuments < ActiveRecord::Migration[6.0]
  def change
    add_column :banal_documents, :dropbox_file_id, :string
  end
end
