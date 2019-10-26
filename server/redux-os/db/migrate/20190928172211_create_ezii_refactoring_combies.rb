# typed: true
class CreateEziiRefactoringCombies < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_refactoring_combies do |t|
      t.text :text
      t.string :url

      t.timestamps
    end
  end
end
