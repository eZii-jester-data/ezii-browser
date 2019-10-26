# typed: true
class CreateWidgets < ActiveRecord::Migration[6.0]
  def change
    create_table :widgets do |t|
      t.text :web_assembly_code

      t.timestamps
    end
  end
end
