# typed: strict
class Banal::Link < ApplicationRecord
  belongs_to :metadata, class_name: '::Banal::Metadatum', foreign_key: 'banal_metadata_id'
  belongs_to :related_object, foreign_key: 'banal_related_object_id'
end
