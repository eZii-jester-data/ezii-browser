# typed: false
SHELL_PRINTF_IS_ESSENTIAL_SINCE_ECHO_ADDS_NEWLINE = 0

def §(*args)
  yield
end

def wait_for(condition)
    while true
            if(condition.call)
                return
            else
                sleep 0.1
            end
    end
end


paste_from_before = ""
next_paste = ""
while true
    next_paste_lambda = lambda { `curl -s localhost:3000/user_text_copies/next_paste -F "#{Rails.application.credentials.multi_copy_password_identifier}=#{Rails.applicatioon.credentials.multi_copy_password_value}"` }

    wait_for(lambda { (next_paste = next_paste_lambda.call) != paste_from_before })

    p next_paste

    §(SHELL_PRINTF_IS_ESSENTIAL_SINCE_ECHO_ADDS_NEWLINE) do
      `printf '#{next_paste}' | pbcopy`
    end


    paste_from_before = next_paste
end
