# typed: true
class AddWeightOfIdentityPlusChildrenToBanalComplexes < ActiveRecord::Migration[6.0]
  def change
    add_column :banal_complexes, :weight_of_identity_plus_children, :decimal, :precision => 100, :scale => 2
  end
end
