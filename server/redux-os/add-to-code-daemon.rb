

Dir['./**/*.rb'].each do |file_path|


		file_lines = File.read(file_path).lines
		
		
		file_lines.select! { |line| line  =~ /(@\w+)/ }
		
		
		
		file_lines.each do |line|
		  puts line
		end

	gets if file_lines.any?
end
