# typed: true
class CreateApis < ActiveRecord::Migration[6.0]
  def change
    create_table :apis do |t|
      t.text :rfc
      t.integer :rftrolling_foreign_key
      t.references :code, null: false, foreign_key: true

      t.timestamps
    end
    add_index :apis, :rftrolling_foreign_key, unique: true
  end
end
