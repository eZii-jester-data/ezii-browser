# typed: true
class CreateBanalProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :banal_projects do |t|
      t.string :name
      t.string :main_category
      t.string :priority
      t.string :status
      t.string :launch_date
      t.text :comments
      t.string :project_manager
      t.string :idea_owner
      t.string :dev_budget_cost

      t.timestamps
    end
  end
end
