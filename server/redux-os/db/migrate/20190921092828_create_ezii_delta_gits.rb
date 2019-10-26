# typed: true
class CreateEziiDeltaGits < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_delta_gits do |t|
      t.date :git_commit_created_at
      t.text :github_commit_link
      t.string :git

      t.timestamps
    end
  end
end
