# typed: false
class AppDetectionAnalysis < ApplicationRecord
  belongs_to :app_detection

  before_create :compute_confidence


  def compute_confidence
    path = EziiOsPath.new(self.jester_os_global_path)
    self.confidence = 0

    if File.directory?(path.to_s) && Dir.entries(path.to_s).include?('app') && (Set.new(Dir.entries(File.join(path.to_s, 'app'))) & Set.new(['controllers', 'models'])).count == 2
      self.confidence += 0.91
    end

  rescue Errno::EACCES
    self.confidence = 0
  end
end
