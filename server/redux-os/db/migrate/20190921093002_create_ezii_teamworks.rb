# typed: true
class CreateEziiTeamworks < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_teamworks do |t|
      t.text :employee_graph_svg_text
      t.text :medium_link
      t.text :ezii_game_x_zip_download_link

      t.timestamps
    end
  end
end
