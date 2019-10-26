# typed: false
class CreateStickRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :stick_records do |t|
      t.text :identifier
      t.text :modifiers

      t.timestamps
    end
  end
end
