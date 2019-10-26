# typed: false
class WitAiParseModelExample < ApplicationRecord
  belongs_to :wit_ai_parse_model


  # after_create :make_wit_ai_request
  after_create :import_to_google_aml_nlp_ee

  def make_wit_ai_request
    wit_server = Wit.new(access_token: self.wit_ai_parse_model.wit_ai_server_token)

    wit_server.post_entities({id: self.entity_name}) rescue nil

    samples = [{
      "text": self.parsable_resource_text[0...280],
      "entities": [
        {
          "entity": self.entity_name,
          "start": self.parsable_resource_entity_value_start_index,
          "end": self.parsable_resource_entity_value_end_index,
          "value": self.entity_value
        }
      ]
    }]

    self.wit_ai_server_response = `
    curl -XPOST 'https://api.wit.ai/samples?v=20170307' \
    -H "Authorization: Bearer #{self.wit_ai_parse_model.wit_ai_server_token}" \
    -H "Content-Type: application/json" \
    -d '#{samples.to_json}'
    `

    self.save!
  end

  def import_to_google_aml_nlp_ee
    # create jsonl for example and copy it to gstorage
    # add jsonl to csv (csv should be namespaced by wit_ai_parse_model.id)
    # import csv to gamllnlpee via http rest request
  end
end
