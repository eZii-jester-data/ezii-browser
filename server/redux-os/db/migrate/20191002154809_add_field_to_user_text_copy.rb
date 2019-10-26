# typed: true
class AddFieldToUserTextCopy < ActiveRecord::Migration[6.0]
  def change
    add_column :user_text_copies, :pasting_started, :boolean
  end
end
