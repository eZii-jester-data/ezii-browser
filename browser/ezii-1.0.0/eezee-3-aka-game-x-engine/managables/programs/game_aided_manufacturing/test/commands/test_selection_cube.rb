require_relative '../test_helper.rb'
require 'byebug'

module SystemTests
  class TestSelectionCube < AbstractSystemTest
    def test_gets_mouse_down_position
      open_gam_window do |console_stdin, console_stdout|
        drb_interface.execute_command(drb_interface.functions[1])
        drag_mouse_from_to_in_gam_window([100, 100], [150, 150])
        scroll_out_in_gam_window(-10)
        sleep 1
        drb_interface.execute_command(drb_interface.functions[1])
        drag_mouse_from_to_in_gam_window([100, 100], [150, 150])
        sleep 0.5
        @output = get_2_last_created_cubes_volume(drb_interface)
      end

      assert @output.first < @output.last, "Firstly created cube is smaller"
    end

    def get_2_last_created_cubes_volume(drb_interface)
      firstly_created_cube = drb_interface.cubes[0]
      secondly_created_cube = drb_interface.cubes[1]

      firstly_created_cube_volume = firstly_created_cube.geometry.volume
      secondly_created_cube_volume = secondly_created_cube.geometry.volume

      return [firstly_created_cube_volume, secondly_created_cube_volume]
    end
  end
end
