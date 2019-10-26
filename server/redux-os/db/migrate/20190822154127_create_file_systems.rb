# typed: true
class CreateFileSystems < ActiveRecord::Migration[6.0]
  def change
    create_table :file_systems do |t|
      t.string :description
      t.string :machine_readable_identifier

      t.timestamps
    end
  end
end
