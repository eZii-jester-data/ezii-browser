# typed: true
class CreateMercurials < ActiveRecord::Migration[6.0]
  def change
    create_table :mercurials do |t|
      t.text :ezii_os_global_path
      t.text :detected_app_type
      t.integer :level

      t.timestamps
    end
  end
end
