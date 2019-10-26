# typed: true
class AddFielToWitAiParseModelExample < ActiveRecord::Migration[6.0]
  def change
    add_column :wit_ai_parse_model_examples, :parsable_resource_text, :text
  end
end
