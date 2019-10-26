# typed: true
class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.integer :reward
      t.string :title
      t.text :briefing
      t.string :cta_copy

      t.timestamps
    end
  end
end
