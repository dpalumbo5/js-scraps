begin
  raise StandardError
rescue => error
  puts "ERROR"
  puts error
  puts "k bye"
end

puts "error"
puts error
