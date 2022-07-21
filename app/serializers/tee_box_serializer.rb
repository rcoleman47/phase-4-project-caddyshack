class TeeBoxSerializer < ActiveModel::Serializer
  attributes :id, :course_id, :course_name, :city, :state, :tee, :color, :par, :total_distance, :image
  
  has_many :holes
  def course_id
    object.course.id
  end

  def course_name
    "#{object.course.name}"
  end

  def image
    "#{object.course.image_url}"
  end

  def address
    "#{object.course.address}"
  end

  def city
    "#{object.course.city}"
  end

  def state
    "#{object.course.state}"
  end

end
