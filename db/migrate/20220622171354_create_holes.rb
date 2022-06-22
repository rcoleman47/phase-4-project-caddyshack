class CreateHoles < ActiveRecord::Migration[7.0]
  def change
    create_table :holes do |t|
      t.integer :number
      t.integer :par
      t.integer :distance
      t.integer :handicap
      t.references :tee_box, null: false, foreign_key: true

      t.timestamps
    end
  end
end
