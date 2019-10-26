# typed: strong
class Banal::Project < ApplicationRecord
    has_many :related_object, as: :object, class_name: "::Banal::RelatedObject"
    has_many :links, through: :related_object
    has_many :documents, through: :related_object   
end
    