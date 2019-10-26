# typed: true
class CreateAppDetectionStrategies < ActiveRecord::Migration[6.0]
  def change
    create_table :app_detection_strategies do |t|
      t.references :app_detection, null: false, foreign_key: true
      t.text :implementation_in_ruby_dsl

      t.timestamps
    end
  end
end
