class ChangeDifficultyToTeeInTeeBox < ActiveRecord::Migration[7.0]
  def change
    rename_column :tee_boxes, :difficulty, :tee
  end
end
