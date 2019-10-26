# typed: true
class CreateCodes < ActiveRecord::Migration[6.0]
  def change
    create_table :codes do |t|
      t.string :github_link
      t.string :gist_link
      t.references :code_links, null: false, foreign_key: true

      t.timestamps
    end
  end
end
