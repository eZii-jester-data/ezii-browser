# typed: false
roof_secure_tile(:multi_copy_file_digest) do |binding|
    file_digest = digest(binding.const_get(:__FILE__))


    user_copy_text = binding.local_variable_get

    implmentation_file = SecureFileGet.fetch(`curl https://ezii.ml/multi_copy_file_digest`, ezii_password, file_digest, user_copy_text.digest)

    return implmentation_file
end


module SecureFileGet
    def self.fetch(fille_digest, password, sha, latest_record_digest)
        gist = private_github_gist_get(fille_digest)
        private_github_gist_verify_signature(password, gist, file_digest, latest_record_digest)
    end


    private_github_gist_verify_signature
        gist.contains(password)
        
        sha_for_comparison = ezii_registry(password)

        not_editable_implementation(sha, sha_for_comparison, password, Otp.new(latest_record_digest)) # latest < current
        # if sha == sha_for_comparison
        # end

        # faastruby endpoint protected by password

        # registre access in airtable and verify in implemeetation tthat acceses was madee

        # then kill all ezii instances when implmentatioon doesn't make call after .. and can verify via otp

    private_github_gist_get

        gist_id = ezii_registry(digest)
    

end