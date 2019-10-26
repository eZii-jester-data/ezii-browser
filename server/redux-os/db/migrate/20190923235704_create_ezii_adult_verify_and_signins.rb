# typed: true
class CreateEziiAdultVerifyAndSignins < ActiveRecord::Migration[6.0]
  def change
    create_table :ezii_adult_verify_and_signins do |t|
      t.string :user_name
      t.string :scm_id
      t.string :shell_script_used
      t.text :when_will_scm_scl011_be_available_as_rubygem_integration

      t.timestamps
    end
  end
end
