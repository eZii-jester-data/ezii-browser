# typed: true
class CreateTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :types do |t|
      # t.references :code, null: false, foreign_key: true

      t.timestamps
    end
  end
end
