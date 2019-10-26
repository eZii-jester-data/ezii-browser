# typed: true
class CreateBasecampIntegrations < ActiveRecord::Migration[6.0]
  def change
    create_table :basecamp_integrations do |t|
      t.string :description
      t.text :code

      t.timestamps
    end
  end
end
