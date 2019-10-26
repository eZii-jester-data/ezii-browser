# typed: true
class CreateEziiGeminators < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_geminators do |t|
      t.text :graphql_query_text
      t.text :url_text

      t.timestamps
    end
  end
end
