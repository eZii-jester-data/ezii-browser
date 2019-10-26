# typed: true
class CreateWitAiParseModelExamples < ActiveRecord::Migration[6.0]
  def change
    create_table :wit_ai_parse_model_examples do |t|
      t.references :wit_ai_parse_model, null: false, foreign_key: true

      t.timestamps
    end
  end
end
