# typed: true
class CreateBanalBrainstorms < ActiveRecord::Migration[6.0]
  def change
    create_table :banal_brainstorms do |t|
      t.text :idea
      t.string :main_category
      t.string :priority
      t.string :status
      t.text :comments
      t.string :idea_owner

      t.timestamps
    end
  end
end
