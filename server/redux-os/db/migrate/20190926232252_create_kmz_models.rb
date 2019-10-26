# typed: true
class CreateKmzModels < ActiveRecord::Migration[6.0]
  def change
    create_table :kmz_models do |t|
      t.text :description
      t.string :global_path

      t.timestamps
    end
  end
end
