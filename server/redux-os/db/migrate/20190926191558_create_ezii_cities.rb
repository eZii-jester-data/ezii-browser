# typed: true
class CreateEziiCities < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_cities do |t|
      t.string :address

      t.timestamps
    end
  end
end
