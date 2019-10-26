# typed: true
class AddFields2ToWitAiParseModelExamples < ActiveRecord::Migration[6.0]
  def change
    add_column :wit_ai_parse_model_examples, :parsable_resource_entity_value_start_index, :integer
    add_column :wit_ai_parse_model_examples, :parsable_resource_entity_value_end_index, :integer
  end
end
