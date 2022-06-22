class TeeBox < ApplicationRecord
  belongs_to :course
  has_many :holes, dependent: :destroy 
  
  validates :tee, presence: true, 
    inclusion: { in: %w(Championship Member Senior Forward), 
    message: "Please select one of the following: Championship, Member, Senior, Forward"},
    uniqueness: { scope: :course }
  validates :color, presence: true, inclusion: { in: %w(Gold Blue Black White Red) }
  validates :par, presence: true, numericality: { only_integer: true, less_than: 75, greater_than: 68 }


end
