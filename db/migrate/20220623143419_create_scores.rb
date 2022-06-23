class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.integer :hole_number
      t.integer :score
      t.boolean :gir
      t.boolean :fir
      t.integer :putts
      t.references :round, null: false, foreign_key: true

      t.timestamps
    end
  end
end
