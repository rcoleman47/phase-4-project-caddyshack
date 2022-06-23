class RoundSerializer < ActiveModel::Serializer
  attributes :id, :golfer, :course, :tee, :score, :score_to_par
  
  
  def course
    "#{object.course.name}"
  end

  def golfer
    "#{object.user.username}"
  end

  def score
    object.scores.pluck(:score).sum
  end

  def score_to_par
    score_to_par = object.scores.pluck(:score).sum - object.course.tee_boxes.find_by(tee: object.tee).par
  end

end
