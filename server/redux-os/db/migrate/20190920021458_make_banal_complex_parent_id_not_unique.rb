# typed: false
class MakeBanalComplexParentIdNotUnique < ActiveRecord::Migration[6.0]
  def change
    # change_column :banal_complexes, :parent_id, :integer, unique: false
    remove_index "banal_complexes", name: "index_banal_complexes_on_parent_id", column: :parent_id
  end
end
