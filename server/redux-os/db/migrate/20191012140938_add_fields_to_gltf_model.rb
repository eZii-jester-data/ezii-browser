# typed: true
class AddFieldsToGltfModel < ActiveRecord::Migration[6.0]
  def change
    add_column :gltf_models, :bin_global_path, :text
    add_column :gltf_models, :textures_directory_global_path, :text
  end
end
