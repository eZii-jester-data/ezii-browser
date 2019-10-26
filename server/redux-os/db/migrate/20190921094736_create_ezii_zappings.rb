# typed: true
class CreateEziiZappings < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_zappings do |t|
      t.text :previous_url
      t.text :next_url

      t.timestamps
    end
  end
end
