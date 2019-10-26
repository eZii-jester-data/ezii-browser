# typed: true
class CreateBanalComplexes < ActiveRecord::Migration[6.0]
  def change
    create_table :banal_complexes do |t|
      t.integer :weight
      t.integer :parent_id

      t.timestamps
    end
    add_index :banal_complexes, :parent_id, unique: true
  end
end
