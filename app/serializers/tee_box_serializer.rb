class TeeBoxSerializer < ActiveModel::Serializer
  attributes :id, :tee, :course_name, :color, :total_distance, :par
  
  has_many :holes


  def course_name
    "#{object.course.name}"
  end

  def total_distance
    object.holes.pluck(:distance).sum
  end
end
