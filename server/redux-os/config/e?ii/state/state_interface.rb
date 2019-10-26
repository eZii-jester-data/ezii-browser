# typed: true
require_relative './../laws_of_code/paragraphs/main.rb'
# =>                .. = e?ii

# new column for banal-code-archive probably: is_included_in_object/ruby/module
class Object
    include Paragraphs
end


§(ALWAYS_PREFIX_INSPECT_STRINGS_WITH_THE_ENGLISH_WORD_INSPECT) do
class StateInterface
  attr_accessor :state
  # #attr_accessor :previous_states
  #
  # def initialize
  #   @previous_states = []
  # end

  def to_s
	  "State #{state}"
  end

  def inspect
    "Inspect: State, object id: #{self.object_id} - #{state.inspect}"
  end

  def ==(other_state)
    self.object_id == other_state.object_id
  end


  # probably(§(CALL_TO_IDENTITY_ON_SELF_FORBIDDEN)) do # https://gist.github.com/eZii-jester-data/5721b529ad21b1b81f39bec670088a68 $
    # §(RECURSION_IS_ESSENTIAL_FOR, "stick 1") do
#       def previous_states
# recursion = @previous_states.map { |s| s.previous_states }.flatten!
# recursion = recursion.nil? ? [] : recursion
#         @previous_states + recursion
#       end
    # end
  # end
  #
  #
  # probably("§(ESSENTIAL_SETTER)") do
  #   def add_previous_states(state)
  #     @previous_states.push(state)
  #   end
  # end
end
end
