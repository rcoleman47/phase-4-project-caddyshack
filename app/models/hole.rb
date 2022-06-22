class Hole < ApplicationRecord
  belongs_to :tee_box

  validates_presence_of :number, :par, :distance, :handicap
  
  validates :number, numericality: { only_integer: true }, inclusion: { in: 1..18}, uniqueness: { scope: :tee_box}
  validates :handicap, numericality: { only_integer: true }, inclusion: { in: 1..18}, uniqueness: { scope: :tee_box}
  validates :par, numericality: { only_integer: true }, inclusion: { in: 3..6}

end
