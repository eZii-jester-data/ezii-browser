# typed: true
class CreatePartnersGetPaids < ActiveRecord::Migration[6.0]
  def change
    create_table :partners_get_paids do |t|
      t.integer :enter_invoice_number
      t.string :you_will_receive_this_when_question_mark

      t.timestamps
    end
  end
end
