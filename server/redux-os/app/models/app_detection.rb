# typed: true
class AppDetection < ApplicationRecord

    def self.detect_rails_app(global_path)
        AppDetectionAnalysis.create!(app_detection: self.find_or_create_by!(app_type: 'rails'), jester_os_global_path: global_path, app_type: 'rails')
    end
end
