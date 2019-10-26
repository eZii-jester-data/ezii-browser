# typed: false
class Unzip < ApplicationRecord
    after_initialize :compute_target_dir_path

    def compute_target_dir_path
        self.target_dir_path = File.join(File.dirname(self.zip_file_path), File.basename(self.zip_file_path, ".zip"))
    end

    def run_on_current_host__unsafe
        `unzip #{self.zip_file_path} -d #{self.target_dir_path}` # TODO: security issue
    end
end
