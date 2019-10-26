# typed: false
class LocalLawPipeline < ApplicationRecord
  belongs_to :local_law_pipeline

  has_rich_text :content
end
