# typed: true
class CreateWaymoSlomos < ActiveRecord::Migration[6.0]
  def change
    create_table :waymo_slomos do |t|
      t.integer :banal_brainstorm_id

      t.timestamps
    end
    add_index :waymo_slomos, :banal_brainstorm_id, unique: true
  end
end
