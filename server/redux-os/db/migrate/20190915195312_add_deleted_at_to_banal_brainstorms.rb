# typed: true
class AddDeletedAtToBanalBrainstorms < ActiveRecord::Migration[6.0]
  def change
    add_column :banal_brainstorms, :deleted_at, :datetime
    add_index :banal_brainstorms, :deleted_at
  end
end

# class StrongMigrations::Checker < ActiveRecord::Migration[6.0]
#   disable_ddl_transaction!

#   def change
#     add_index :banal_brainstorms, :deleted_at, algorithm: :concurrently
#   end
# end
