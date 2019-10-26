# typed: true
class CreateEziiDeltaDirections < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_delta_directions do |t|
      t.references :ezii_delta_git, null: false, foreign_key: true
      t.integer :direction_y

      t.timestamps
    end
  end
end
