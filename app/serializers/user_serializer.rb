class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :rounds_played, :courses_played, :avg_round_score, :avg_strokes_to_par, :gir_percentage, :fir_percentage, :avg_putts_per_hole, :handicap

 
  def courses_played
    object.courses.pluck(:name).uniq
  end

  def avg_strokes_to_par
    object.rounds.map{|r| r.score_to_par}.sum / object.rounds_played
  end

  def gir_percentage
    (object.scores.where(fir: true).count / object.scores.count) * 100
  end

  def fir_percentage
    (object.scores.where(fir: true).count / object.scores.count) * 100
  end

  def avg_putts_per_hole
    object.scores.map{|s| s.putts}.sum / object.scores.count
  end

  def handicap
    rating = object.tee_boxes.average(:rating).to_i
    slope = object.tee_boxes.average(:slope).to_i

    ((((object.avg_round_score - rating) * 113) / slope) * 0.96).to_i  
  end
end
