# typed: strict
class Comment < ApplicationRecord
  searchkick
  
  acts_as_tree
  belongs_to :banal_brainstorm, class_name: 'Banal::Brainstorm', foreign_key: 'banal_brainstorm_id'
end
