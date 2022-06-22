class RemoveColumnsFromTeeBoxes < ActiveRecord::Migration[7.0]
  def change
    remove_column :tee_boxes, :slope, :integer
    remove_column :tee_boxes, :rating, :float
  end
end
