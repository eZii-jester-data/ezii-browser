# typed: true
class CreateWhitelabelSystemExtensions < ActiveRecord::Migration[6.0]
  def change
    create_table :whitelabel_system_extensions do |t|
      t.text :rfc
      t.references :comment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
