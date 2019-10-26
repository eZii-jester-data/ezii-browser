# typed: true
class CreateCodeChangeRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :code_change_requests do |t|
      t.string :text

      t.timestamps
    end
  end
end
