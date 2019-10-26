# typed: true
class CreateUserTextCopies < ActiveRecord::Migration[6.0]
  def change
    create_table :user_text_copies do |t|
      t.references :ezii_adult_verify_and_signin, null: false, foreign_key: true
      t.text :copies

      t.timestamps
    end
  end
end
