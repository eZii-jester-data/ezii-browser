# typed: true
class CreateCookieChanges < ActiveRecord::Migration[6.0]
  def change
    create_table :cookie_changes do |t|
      t.string :identifier
      t.string :value

      t.timestamps
    end
  end
end
