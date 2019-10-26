

file = ARGV[0]


file_lines = File.read(file).lines


file_lines.select! { |line| line  =~ /(@\w+)/ }



file_lines.each do |line|
  puts line
end


