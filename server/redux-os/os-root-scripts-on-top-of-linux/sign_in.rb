# typed: false
require "libusb"

require 'socket'
ip = Socket.ip_address_list.detect{|intf| intf.ipv4_private?}
IP = ip.ip_address

require 'open-uri'
R_IP = open('http://whatismyip.akamai.com').read

headphone_output_check = `audiodevice | grep "External Headphones"`
puts headphone_output_check

headphones = headphone_output_check =~ /External Headphones/
puts headphones

usb = LIBUSB::Context.new
if usb.devices.map(&:configurations).select do |dc|
  dc.to_s =~ /SCL01x Contactless Reader/
end.any? && headphones
  puts 'yay'
  # curl SOON TO BE IMPLEMENTEDD FOR SAAACURITY
  # shell_script_used
  `curl https://jester-data.herokuapp.com/ezii_adult_verify_and_signins -F "ezii_adult_password=#{ENV['EZII_ADULT_PASSWORD']}" -F "ezii_adult_verify_and_signin[shell_script_used]=ruby_verify_scm_plugged_in_scm_scl011" -F "ezii_adult_verify_and_signin[scm]=scl011" -F "ezii_adult_verify_and_signin[user_name]=#{R_IP}"`
  `curl https://jester-data.herokuapp.com/ezii_adult_verify_and_signins -F "ezii_adult_password=#{ENV['EZII_ADULT_PASSWORD']}" -F "ezii_adult_verify_and_signin[shell_script_used]=transparent_0_income_equals_outcome_and_money_must_flow_like_in_ancient_times_better_you_spend_it_all_or_someone_will_not_have_it" -F "ezii_adult_verify_and_signin[scm]=scl011" -F "ezii_adult_verify_and_signin[user_name]=#{R_IP}"`
else
 puts 'nay'
end
