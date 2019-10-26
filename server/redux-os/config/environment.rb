
Zeitwerk::Loader.eager_load_all


require 'ladder'

ladder {}


ENV['ELASTICSEARCH_URL'] = Rails.application.credentials.elasticsearch_url

require 'faraday'




# Load the Rails application.
require_relative 'application'



require 'drb/drb'


if Rails.env.development?

    # The URI for the server to connect to
    DRB_URI="druby://localhost:61234"



end



    # Initialize the Rails application.
    Rails.application.initialize!



    if Rails.env.development?


    # The object that handles requests on the server
    FRONT_OBJECT=ApplicationRecord.descendants



    DRb.start_service(DRB_URI, FRONT_OBJECT)
    # Wait for the drb server thread to finish before exiting.
end

ENV['ELASTICSEARCH_URL'] = Rails.application.credentials.elasticsearch_url
