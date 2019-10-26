# typed: true
class AddFieldsToAppDetectionAnalysis < ActiveRecord::Migration[6.0]
  def change
    add_column :app_detection_analyses, :app_type, :text
    add_column :app_detection_analyses, :jester_os_global_path, :text
  end
end
