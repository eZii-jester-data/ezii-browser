# typed: true
class CreateEziiIntegrations < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_integrations do |t|

      t.timestamps
    end
  end
end
