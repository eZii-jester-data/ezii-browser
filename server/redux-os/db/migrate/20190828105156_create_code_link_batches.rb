# typed: true
class CreateCodeLinkBatches < ActiveRecord::Migration[6.0]
  def change
    create_table :code_link_batches do |t|
      t.string :description
      t.references :code_link, null: false, foreign_key: true

      t.timestamps
    end
  end
end
