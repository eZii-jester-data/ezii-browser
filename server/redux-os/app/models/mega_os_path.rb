# typed: true
class MegaOsPath < ApplicationRecord
  belongs_to :comment, optional: true

  def comment_count
    if comment.present?
      1 + comment.descendants.count
    else
      0
    end
  end
end
