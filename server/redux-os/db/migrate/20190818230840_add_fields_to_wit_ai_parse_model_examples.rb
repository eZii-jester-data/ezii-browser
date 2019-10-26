# typed: true
class AddFieldsToWitAiParseModelExamples < ActiveRecord::Migration[6.0]
  def change
    add_column :wit_ai_parse_model_examples, :entity_name, :string
    add_column :wit_ai_parse_model_examples, :entity_value, :string
    add_column :wit_ai_parse_model_examples, :parsable_resource, :string
    add_column :wit_ai_parse_model_examples, :parsable_resource_query, :string
  end
end
