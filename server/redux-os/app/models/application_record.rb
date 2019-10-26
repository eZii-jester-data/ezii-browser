# typed: strong
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true


  def self.marshal_dump
    {
      name: self.name,
      attribute_names: self.attribute_names
    }
  end

  def self.marshal_load(hash)

  end
end
