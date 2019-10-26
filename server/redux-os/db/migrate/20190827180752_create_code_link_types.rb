# typed: true
class CreateCodeLinkTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :code_link_types do |t|
      t.text :type_description
      t.references :type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
