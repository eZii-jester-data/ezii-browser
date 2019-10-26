heroku run bash --app banal-data
rails c
Banal::Project.all.group_by { |p| p.links.count }.map { |c, p| "#{c}: #{p.name}" }
Banal::Project.all.group_by { |p| p.links.count }.map { |c, p| "#{c}: #{p.map(&:name).join}" }
