class TeeBoxSerializer < ActiveModel::Serializer
  attributes :id, :course_name, :image, :address, :city, :state, :tee, :color, :par, :total_distance
  
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
