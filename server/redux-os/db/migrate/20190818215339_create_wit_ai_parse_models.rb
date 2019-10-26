# typed: true
class CreateWitAiParseModels < ActiveRecord::Migration[6.0]
  def change
    create_table :wit_ai_parse_models do |t|
      t.string :wit_ai_client_token
      t.string :wit_ai_server_token

      t.timestamps
    end
  end
end
