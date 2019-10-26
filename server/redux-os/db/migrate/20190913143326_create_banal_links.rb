# typed: true
class CreateBanalLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :banal_links do |t|
      t.text :uri
      t.references :banal_metadata, null: false, foreign_key: true
      t.references :banal_related_object, null: false, foreign_key: true

      t.timestamps
    end
  end
end
