# typed: true
class CreateEziiOsFiles < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_os_files do |t|
      t.string :file_path

      t.timestamps
    end
  end
end
