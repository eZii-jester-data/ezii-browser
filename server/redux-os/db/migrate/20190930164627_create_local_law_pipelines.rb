# typed: true
class CreateLocalLawPipelines < ActiveRecord::Migration[6.0]
  def change
    create_table :local_law_pipelines do |t|
      t.text :title
      t.text :paragraph
      t.text :local_law_link
      t.integer :paragraph_number
      t.string :book
      t.references :local_law_pipeline, null: false, foreign_key: true

      t.timestamps
    end
  end
end
