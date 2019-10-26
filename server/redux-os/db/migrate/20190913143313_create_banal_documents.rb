# typed: true
class CreateBanalDocuments < ActiveRecord::Migration[6.0]
  def change
    create_table :banal_documents do |t|
      t.text :global_path
      t.references :banal_metadata, null: false, foreign_key: true
      t.references :banal_related_object, null: false, foreign_key: true

      t.timestamps
    end
  end
end
