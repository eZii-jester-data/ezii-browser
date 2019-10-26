# typed: strict
class Banal::RelatedObject < ApplicationRecord
  belongs_to :object, polymorphic: true
  has_one :link, foreign_key: 'banal_related_object_id'
  has_one :document, foreign_key: 'banal_related_object_id'
end
