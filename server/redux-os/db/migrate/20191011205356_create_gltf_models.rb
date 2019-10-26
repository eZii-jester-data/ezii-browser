# typed: true
class CreateGltfModels < ActiveRecord::Migration[6.0]
  def change
    create_table :gltf_models do |t|
      t.text :global_path

      t.timestamps
    end
  end
end
