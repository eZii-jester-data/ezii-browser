# typed: true
class CreateHartScienceExperiments < ActiveRecord::Migration[6.0]
  def change
    create_table :hart_science_experiments do |t|
      t.text :text
      t.string :url

      t.timestamps
    end
  end
end
