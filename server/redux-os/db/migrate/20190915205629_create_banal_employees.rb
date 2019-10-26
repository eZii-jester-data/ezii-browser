# typed: true
class CreateBanalEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :banal_employees do |t|
      t.text :Facebook
      t.text :Linkedin
      t.text :Role
      t.text :e_mail
      t.text :Mobile
      t.text :Address
      t.text :Country
      t.text :Full_Name
      t.text :Last_Name_2
      t.text :Last_Name_1
      t.text :Middle_Name
      t.text :First_Name

      t.timestamps
    end
  end
end
