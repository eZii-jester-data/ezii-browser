# typed: true
class FileSystem < ApplicationRecord
    def path_modified_at(path)
        case machine_readable_identifier
        when 'local'
            File.mtime(path.file_system_path)
        when 'dropbox'
            if file?(path)
                Time.parse(path.dropbox_metainfo['server_modified'])
            else
                return nil
            end
        end
    end

    def file?(path)
        case machine_readable_identifier
        when 'local'
            File.file?(path.file_system_path)
        when 'dropbox'
            path.dropbox_metainfo[".tag"] == 'file'
        end
    end

    # def self.find_by(*args)
    #     @cached ||= {}

    #     @cached[args.join(',')]
    # end
end
