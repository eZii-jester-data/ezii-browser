# typed: false



# fistlly be good to your geographic nextz
# secndly be good to all people

# over time you'll changee the order, but at first you can't gladly


# paragraphs do
NOT_DELETE_BEFORE_100_TEST_COVERAGE = 0
STILL_FAILS_SADLY = 1 # well documented errors can be helpful, knowing errors for ai,  or how an error helps the. world, ...?
ASSERT_NO_DROPBOX_API_ERRORS = 2
CHECK_FOR_TEMPFILE_NOT_REWINDED_ISSUE = 3
TEMPFILES_MUST_BE_SUPPORTED = 4
IDEMPOTENCY_IS_QUESTIONABLE = 5
EXECUTE_IN_SUCCESSION = 6
ORDER_OF_LOC_IS_IMPORTANT_2 = 7
ORDER_OF_LOC_IS_IMPORTANT_IMPORTANCE_IS_KNOWN = 8
ORDER_OF_LOC_IS_IMPORTANT_1 = 9
NOT_TO_BE_CHANGED_BEFORE_VOTES_EXEEDED_70_PERCENT = 10
ORDER_OF_LOC_IS_IMPORTANT = 11
MAKE_SURE_THE_LAST_LOC_ALSO_PRINTS_MEOW_WITHOUT_CHANGING_ANYTHTING_ONLY_VIA_QUANTUM_MAGIC = 12
HACK_MUST_BE_CHANGED = 13
GDPR_COMPLIANCE_PROBLEM = 14
GDPR_COMPLIANCE_IMPLEMENTATION = 15

DELTA_MUST_BE_IMPLEMENTED_UNTIL_YEAR_2020_AC = 16

MUST_BE_TESTED = 17

##
LIMIT_SQL_SELECT_TO_TEN_TOTAL_RECORDS = 18 
# Check via postgresql database monitor if only 10 records are loaded  in the do/end block of the law 
# §⚕  check  if the  selects where  actually made  in the asklepios clause
##

# Wenn Person A, Quantum B observiert, ist Quantum Q_A im Kopf z.B. von Person A in einem anderen Zustand
# zur Zeit T_A, als wenn Person B Quantum B observiert, weil dann ist eventuell sogar, Quantum Q_B 
# im Kopf von Person B wesentlich relevanter für den Zustand von Quantum B

# Allerdings geht es viel eher um den Zeitpunkt T, weil Quanten andauernd in Bewegung sind


# Was wäre wenn Person A und Person B gleichzeitig zu Zeitpunkt T Quantum Q sich anschauen
# Observieren sie einen anderen Zustand Z von Quantum Q oder sehen Sie beide einen anderen Zustand Z_X?

AVOID_N_PLUS_1 =  19


EZII_OS_GDPR_COMPLIANCE_PROBLEM = 20
BYPASS_GDPR_PROBLEM = 21
USER_OTHER_WEBSITES_GDPR_PROBLEM = 22

UNIMMUNIZED_FOR_ENDLESS_REDIRECTS_IN_COMBINATION_WTH = 23
# end


LAYOUT_NIL_INTEGRAL_FOR_AVOIDING_INFINTE_RECURSION = 24


AVOID_INFINITE_RECURSION = 25


CHANGE_HACKY_DUPLICATE_DEFINITION_OF_INSTANCE_VARIABLE = 26

FALSE_INSTEAD_OF_NIL_IS_ESSENTIAL = 27

NO_LAYOUT_EXPECTS_FALSE_INSTEAD_OF_NIL = 28

LOCAL_VARIABLE_REQUIRED_SUFFIX__for_local_scope_mismmatch_prevention = 29
ALWAYS_RESTART_SPRING_WHEN_CHANGES_OCCUR_IN_THIS_BLOCK = 30

NIL_RIGHT_HAND_ASSIGMENT_MEANT_AS_UNDEFINED_FOR_SECURITY = 31

ASSIGNMENT_BEFORE_CODE_BLOCK_NOT_IN_CODE_BLOCK_END = 32
ASSIGNMENT_BEFORE_CODE_BLOCK_NOT_IN_CODE_BLOCK_START = 33

VARIABLE_COPIES_REFERENCE = 34

ALWAYS_PREFIX_INSPECT_STRINGS_WITH_THE_ENGLISH_WORD_INSPECT = 35

IMPORTANT_TO_PROPAGATE_ARGUMENT = 36

#TODO:key => "value",  global law for ezii os §(INSPECT_STRINGS_MUST_BE_PREFIXED_WITH("INSPECT:"))


ALL_RETURN_STATEMENTS_ARE_ESSENTIAL = 37
ALL_RETURN_STATEMENTS_ARE_NOT_OPTIONAL = 38

URL_MUST_RESOLVE = 39

DICTIONARY_DOT_COM_MUST_YIELD_CORRECT_SPELLING = 40

#(
MUST_CHANGE_TO_SPELLING_COM = 41

# [:delta_law, active_when: {is_functional: [:url,'https://spelling.com']}]
#)

NO_RETURN_STATEMENTS_ALLOWED = 42

ESSENTIAL_LOCAL_VARIABLE_DEFAULT_INITIALIZATION = 43

USING_APPEND_OVER_SAFE_APPEND = 44

USING_FORMAT_JPG_INSTEAD_OF_JPEG_CAUSES = 45

LAW_MONITORS = {}

LAW_MONITORS[USING_FORMAT_JPG_INSTEAD_OF_JPEG_CAUSES] = ∆ do |dsl| # ∆ delta, how to observe the dellta
  dsl.git_diff("format.jpeg", "format.jpg") # when this evaluates to true, a law breach will be thrown, growl will send a red alert notificaation
  
  #        state in git commits.  state in git diff
end

module Paragraphs
  class ExecutionInSuccession
    def initialize(&bloc)
      @self_before_instance_eval = eval "self", bloc.binding
      self.instance_eval(&bloc)
    end
    
    def firstly(&bloc)
      @first = bloc
    end
    
    def secondly(&bloc)
      @second = bloc
    end

    def evaluate(block)
      instance_eval &block
    end
  
    def method_missing(method, *args, &block)
      @self_before_instance_eval.send method, *args, &block
    end
    
    def start
      evaluate(@first)
      evaluate(@second)
    end
  end
  
  # Higgs-Feld, Quanten
  module ExterrnalCommunication
    def self.tweet_to(twitter_username, message)
      puts "#{twitter_username}: #{message}"
    end
  end

  class << self
    def report_paragraph_infraction(id)
      fail "§#{id} was infringed"
    end
  end
  
  class DropboxApiCheckFaradayMiddleware < Faraday::Response::Middleware
    def on_complete(env)
      if env.body.empty?
        tweet_to(
          'dropboxsupport',
          """
            Failuer of Dropbox Business API
            ruby environment
            running on #{'https://jeste-data.herokuapp.com'}
            #{env.inspect}
          """
        )
        Paragraphs.report_paragraph_infraction(ASSERT_NO_DROPBOX_API_ERRORS)
      end
    end
  end

    def §(*paragraph_constants, &bloc)
      # if(paragraph_constants.include?(TEMPFILES_MUST_BE_SUPPORTED))
      #   t = Tempfile.new
      #   t.write("test")
      #   t.rewind
      #   unless t.read == "test"
      #     Paragraphs.report_paragraph_infraction(TEMPFILES_MUST_BE_SUPPORTED)
      #   end
      # end
      
      if(paragraph_constants.include?(ASSERT_NO_DROPBOX_API_ERRORS))
      
        Faraday::Connection.class_eval do
          alias_method :original_initialize, :initialize
          def initialize(*args, &block)
            original_initialize(*args, &block)
      
            self.use(DropboxApiCheckFaradayMiddleware)
          end
        end
      
      end
      
      
      if(paragraph_constants.include?(EXECUTE_IN_SUCCESSION))
        ExecutionInSuccession.new(&bloc).start
      else
        yield if block_given?
      end
    end

    def §⚕(*paragraph_constants, &bloc)
      yield
      # this is thought as the implementation of a law, i.e. the remedy, the medicine for the law
    end

    def §∆(*paragraph_constants, &bloc) # law that requests a delta that must be implemented, idieallly accompanied by a law that *should be implemented* (positively formulatedd, non violent communication) and a law that was broken
      # this is thought  as laws that expect somemthing  in the future, i.e.  somethingi s  broken and should be fixed by  the delta
      yield if block_given?
    end
    
    
    # explanation (⚕) for change (∆) law (§)
    def §∆⚕(*paragraph_constants, &bloc)
      # this is thought  as laws that expect somemthing  in the future, i.e.  somethingi s  broken and should be fixed by  the delta
      yield
    end
    
    def ❌(*args, &bloc) # first occurencee of error
      yield
    end
    
    def √?(*args, &block) # root of error?
      yield
    end
end
#
#
# LOG OBject includes somewhere, so it's easy to find and now

# new column for banal-code-archive probably: is_included_in_object/ruby/module
# class Object
#     include Paragraphs
# end
