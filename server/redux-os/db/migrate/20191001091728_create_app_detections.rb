# typed: true
class CreateAppDetections < ActiveRecord::Migration[6.0]
  def change
    create_table :app_detections do |t|
      t.string :app_type
      t.text :strategy

      t.timestamps
    end
  end
end
