# typed: true
class AddFieldsToUserTextCopies < ActiveRecord::Migration[6.0]
  def change
    add_column :user_text_copies, :pastes_used, :integer, default: 0
  end
end
