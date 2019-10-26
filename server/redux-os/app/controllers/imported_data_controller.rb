# typed: false
class ImportedDataController < ApplicationController
  def overview
    redirect_to(directory_path('/local/'))
  end
end
