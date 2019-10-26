# typed: true
class AddFields3ToWitAiParseModelExamples < ActiveRecord::Migration[6.0]
  def change
    add_column :wit_ai_parse_model_examples, :wit_ai_server_response, :text
  end
end
