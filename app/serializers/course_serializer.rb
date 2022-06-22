class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state

  has_many :tee_boxes
  has_many :holes
end
