# typed: true
class AddNameToBanalComplexes < ActiveRecord::Migration[6.0]
  def change
    add_column :banal_complexes, :name, :string
  end
end
