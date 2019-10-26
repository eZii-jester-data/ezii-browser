# typed: false

require 'open-uri'
R_IP = open('http://whatismyip.akamai.com').read

def ∆(*args) # changes for the future
 yield
end

def §(*paragraph_const) # laws, mostly things that shouldn't be changed
  yield
end

def ⚕(*args) # explanations
  yield
end

def ∆⚕(*args)
  yield
end

RETURN_STATEMENT_IS_ESSENTIAL = 0
VARIABLE_ASSIGNMENT_IN_COMPARE_STATEMENT_IS_ESSENTIAL_FOR = 1
FIRST_STICK = 3
SECOND_STICK = 4
DONT_CHANGE = 5
DONT_CHANGE_EXCEPT_FOR_REFACTORING_TO_OOP = 6

∆⚕("when changing this to oop, the ∆, §, ∆, ⚕ and maybe even ∆⚕(change request + explanation) will make more sense") do
  §(DONT_CHANGE_EXCEPT_FOR_REFACTORING_TO_OOP) do
    def wait_for(condition)
      while true
        ⚕(FIRST_STICK, SECOND_STICK) do
          if(condition.call)
            §(RETURN_STATEMENT_IS_ESSENTIAL, DONT_CHANGE) do
              return
            end
          else
            sleep 0.1
          end
        end
      end
    end


    copied_text_before = ""
    copied_texts = []
    copied_text = ""

    # copying
    # Thread.new  do
      while true
        ∆("change to wait for copy key combination pressed on OS (apple script probably) in ordder to allow copy and pasting the same text") do
          ⚕("The copied_text = `pbpaste` is essential for the first stick, because otherwise the wait_for  function doesn't get a freshly copied text") do
            §(VARIABLE_ASSIGNMENT_IN_COMPARE_STATEMENT_IS_ESSENTIAL_FOR => FIRST_STICK) do
              ⚕("The wait for condition must be passed as an anonymous function here, because otherwise it's only called once and doesn't get a freshly copied textt", SECOND_STICK) do
                wait_for(lambda { (copied_text = `pbpaste`) != copied_text_before })
              end
            end
          end
        end

        copied_texts.push(copied_text)
        copied_text_before = copied_text

        `curl localhost:3000/user_text_copies -F "ezii_adult_password=#{ENV['EZII_ADULT_PASSWORD']}" -F "ezii_adult_verify_and_signin[shell_script_used]=ruby_verify_scm_plugged_in_scm_scl011" -F "ezii_adult_verify_and_signin[scm_id]=scl011" -F "ezii_adult_verify_and_signin[user_name]=#{R_IP}" -F "user_text_copy[copies]=#{copied_texts.join(',')} -F "#{Rails.application.credentials.multi_copy_password_identifier}=#{Rails.applicatioon.credentials.multi_copy_password_value}" `

        p copied_texts
      end
    # end

    # # pasting
    # Thread.new do
    #   while true

    #   end
    # end
  end
end
