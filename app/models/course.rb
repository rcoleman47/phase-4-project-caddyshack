class Course < ApplicationRecord
  has_many :tee_boxes, dependent: :destroy
  has_many :holes, through: :tee_boxes
  
  validates :name, presence: true, uniqueness: true
  
  validates_presence_of :address, :city, :state

end
