class RoundSerializer < ActiveModel::Serializer
  attributes :id, :course, :tee, :score, :score_to_par

  has_many :scores, key: :breakdown
  
  def course
    "#{object.course.name}"
  end

  def score
    object.scores.pluck(:score).sum
  end

  def score_to_par
    object.scores.pluck(:score).sum - object.course.tee_boxes.find_by(tee: object.tee).par
  end

end
