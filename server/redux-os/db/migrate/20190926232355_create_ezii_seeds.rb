# typed: true
class CreateEziiSeeds < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_seeds do |t|
      t.text :github_link
      t.text :gist_link
      t.text :description

      t.timestamps
    end
  end
end
