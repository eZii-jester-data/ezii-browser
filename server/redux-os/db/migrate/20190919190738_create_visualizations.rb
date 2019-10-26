# typed: true
class CreateVisualizations < ActiveRecord::Migration[6.0]
  def change
    create_table :visualizations do |t|
      t.string :image_url

      t.timestamps
    end
  end
end
