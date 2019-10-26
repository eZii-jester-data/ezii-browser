require 'byebug'

require 'drb/drb'

PAGES = []
CLICK_HANDLERS = {}
SERVER_URI="druby://localhost:61234"
DRb.start_service


drb_interface  = DRbObject.new_with_uri(SERVER_URI)


class Class
    attr_accessor :attribute_names, :name
    def marshal_dump
        {
          attribute_names: self.attribute_names,
          name: self.name
        }
      end
    
      def marshal_load(hash)
        self.attribute_names = hash[:attribute_names]
        self.name = hash[:name]
      end
end


require 'ruby2d'

# Set the window size
set width: 400, height: 800

set title: "Fun first"


def click_handler(y_start:, y_end:, &block)
    a = (y_start / 10).floor
    b = (y_end / 10).ceil

    (a..b).each do |i|
        CLICK_HANDLERS[i] = block
    end
end

    PAGES.push(
        [
            Text.new('Managables', y: 0),
            Text.new('  Games', y: 20),
            Text.new('    Game Aided Manufacturing', y: 40),   
            Text.new('  Services', y: 60),
            Text.new('    Error Web App', y: 80),
            Text.new('    Vision/OCR', y: 100),
            Text.new('    Livestream Interactive', y: 120),
            Text.new("  Browser", y: 150)
        ]
)

    drb_interface.each.with_index do |rails_model, i|
        PAGES[0].push(Text.new(rails_model.name, y: 170 + (i * 20)))

        click_handler(y_start: 170 + (i * 20), y_end: 170 + (i * 20) + 20) do
            # PAGES[0][0].push(Text.new(rails_model.name, y: 170 + (i * 20) + 5))
            PAGES[0].each(&:remove)

            PAGES.push(
                [
                    Text.new(rails_model.name, y: 0),
                    *rails_model.attribute_names.map.with_index { |a, i| Text.new(a.inspect, y: 30 + i * 30) }
                ]
            )
        end
    end


on :mouse_up do |event|
    # x and y coordinates of the mouse button event
    case event.button
    when :left
        CLICK_HANDLERS[(event.y / 10).to_i].call
    end
end


# Show the window
show
