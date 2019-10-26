# typed: true
class AddTargetDirPathToUnzips < ActiveRecord::Migration[6.0]
  def change
    add_column :unzips, :target_dir_path, :string
  end
end
