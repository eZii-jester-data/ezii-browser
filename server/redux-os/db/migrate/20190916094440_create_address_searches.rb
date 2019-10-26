# typed: true
class CreateAddressSearches < ActiveRecord::Migration[6.0]
  def change
    create_table :address_searches do |t|
      t.text :sentiment
      t.text :search_string

      t.timestamps
    end
  end
end
