# typed: true
class CreateMegaOsPaths < ActiveRecord::Migration[6.0]
  def change
    create_table :mega_os_paths do |t|
      t.text :global_path
      t.references :comment, null: true, foreign_key: true

      t.timestamps
    end
  end
end
