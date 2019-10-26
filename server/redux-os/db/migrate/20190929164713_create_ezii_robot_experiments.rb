# typed: true
class CreateEziiRobotExperiments < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_robot_experiments do |t|

      t.timestamps
    end
  end
end
