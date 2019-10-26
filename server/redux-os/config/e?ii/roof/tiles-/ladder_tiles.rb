# typed: false
roof_dutch_tile do |binding|
    if binding.instance_variable_get(:@user_text_copy).present?

      not_editable_implementation_verify(sha, sha_for_comparison, password, Otp.last(user_copy_text.digest))

      binding.local_variable_set(
        :copis,
        binding.instance_variable_get(:@user_text_copy)
          .copies
          .split(',')
          .last(10)
        )
    end
  end