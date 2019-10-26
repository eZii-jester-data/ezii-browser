# typed: false
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# WitAiParseModel.create(wit_ai_client_token: ENV["WIT_CLIENT_TOKEN"], wit_ai_server_token: ENV['WIT_SERVER_TOKEN'])

FileSystem.create(
    description: 'Local', machine_readable_identifier: 'local'
)

FileSystem.create(
    description: 'Dropbox', machine_readable_identifier: 'dropbox'
)

FileSystem.create(
    description: 'Github', machine_readable_identifier: 'github'
)

# Task.create(
#     reward: 50,
#     title: 'Uncover 50 president names of housing communities across Norway',
#     briefing: "Each uncovered president must be at least 5 minutes of car travel time away from all previously uncovered ones. You'll be presented a map with PDF documents about housing communities which are already located on a map. Then you need to find the names of the presidents in the PDF documents. Bonus: Find the name in a second PDF document, to verify it's spelling and validity.",
#     cta_copy: 'Show geographical map'
# )


§(IDEMPOTENCY_IS_QUESTIONABLE) do
begin
ActiveRecord::Base.connection.execute(
        "INSERT INTO banal_complexes (id, weight, parent_id, name, created_at, updated_at) VALUES (0, 0, 1, \'Root\', \'#{Time.now}\', \'#{Time.now}\')"
    )
ActiveRecord::Base.connection.execute(
        "INSERT INTO banal_complexes (id, weight, parent_id, name, created_at, updated_at) VALUES (1, 0, 0, \'?\', \'#{Time.now}\', \'#{Time.now}\')"
    )
    
  rescue
    warn "Banal Complex Idempotency is questionable for rails db:seed"
  end
end



§(ORDER_OF_LOC_IS_IMPORTANT) do
  §(EXECUTE_IN_SUCCESSION, NOT_TO_BE_CHANGED_BEFORE_VOTES_EXEEDED_70_PERCENT) do
    firstly do
      §(ORDER_OF_LOC_IS_IMPORTANT_1, ORDER_OF_LOC_IS_IMPORTANT_IMPORTANCE_IS_KNOWN, "09/26/2019 21:26") do
        EziiCity.reindex
      end
    end
    
    secondly do
      §(ORDER_OF_LOC_IS_IMPORTANT_2, ORDER_OF_LOC_IS_IMPORTANT_IMPORTANCE_IS_KNOWN, "09/26/2019 21:26") do
        EziiCity.create!(address: 'Aachen, Germany')
      end
    end
  end

  
  §(ORDER_OF_LOC_IS_IMPORTANT_2) do
   Comment.reindex
  end
end


KmzModel.create!(id: 1, description: "Aachen Dome", global_path: '/' + File.join('local', Rails.application.root, 'storage', 'kmz_models', 'aachen-dome.kmz'))
KmzModel.create!(description: "Aachen Dome", global_path: '/' + File.join('local', Rails.application.root, 'storage', 'kmz_models', 'aachen-dome.kmz'))