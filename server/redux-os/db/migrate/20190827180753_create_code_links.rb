# typed: true
class CreateCodeLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :code_links do |t|
      t.text :link
      t.references :code_link_type, null: false, foreign_key: true
      t.text :description

      t.timestamps
    end
  end
end
