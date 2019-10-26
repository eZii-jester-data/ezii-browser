# typed: true
class CreateBanalBusinessTestcases < ActiveRecord::Migration[6.0]
  def change
    create_table :banal_business_testcases do |t|
      t.string :org_id
      t.string :name
      t.text :metainfo
      t.string :link

      t.timestamps
    end
  end
end
