# typed: false
require 'net/http'
require 'cgi'

class EziiIntegration < ApplicationRecord

    def start
        require 'discordrb'

        bot = Discordrb::Bot.new token: ENV["DISCORD_TOKEN"]

        bot.message do |event|
            response_message = Net::HTTP.get('ezii-server.herokuapp.com', '/?message=' + CGI.escape(event.message.content))
            event.respond response_message
        end

        bot.run
    end
end
