class ChangeHoleDistanceToInt < ActiveRecord::Migration[7.0]
  def change
    change_column :holes, :distance, :integer
  end
end
