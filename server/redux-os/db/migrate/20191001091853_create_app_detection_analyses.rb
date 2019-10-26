# typed: true
class CreateAppDetectionAnalyses < ActiveRecord::Migration[6.0]
  def change
    create_table :app_detection_analyses do |t|
      t.references :app_detection, null: false, foreign_key: true
      t.float :confidence

      t.timestamps
    end
  end
end
