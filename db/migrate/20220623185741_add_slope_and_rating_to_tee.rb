class AddSlopeAndRatingToTee < ActiveRecord::Migration[7.0]
  def change
    add_column :tee_boxes, :slope, :integer
    add_column :tee_boxes, :rating, :integer
  end
end
