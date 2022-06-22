class CreateTeeBoxes < ActiveRecord::Migration[7.0]
  def change
    create_table :tee_boxes do |t|
      t.string :difficulty
      t.string :color
      t.integer :par
      t.integer :slope
      t.integer :rating
      t.references :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
