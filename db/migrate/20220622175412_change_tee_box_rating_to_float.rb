class ChangeTeeBoxRatingToFloat < ActiveRecord::Migration[7.0]
  def change
    change_column :tee_boxes, :rating, :float
  end
end
