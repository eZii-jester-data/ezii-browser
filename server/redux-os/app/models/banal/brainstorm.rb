# typed: strict
class Banal::Brainstorm < ApplicationRecord
    acts_as_paranoid
    
    has_many :comments, foreign_key: 'banal_brainstorm_id'
end
