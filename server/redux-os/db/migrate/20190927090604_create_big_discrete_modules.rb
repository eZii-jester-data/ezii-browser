# typed: true
class CreateBigDiscreteModules < ActiveRecord::Migration[6.0]
  def change
    create_table :big_discrete_modules do |t|
      t.text :why
      t.text :how
      t.text :what
      t.text :when

      t.timestamps
    end
  end
end
