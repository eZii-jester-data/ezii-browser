# typed: true
class CreateUnzips < ActiveRecord::Migration[6.0]
  def change
    create_table :unzips do |t|
      t.string :zip_file_path

      t.timestamps
    end
  end
end
