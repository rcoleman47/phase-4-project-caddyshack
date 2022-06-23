class Round < ApplicationRecord
  belongs_to :user
  belongs_to :course

  has_many :scores, dependent: :destroy

  def score_to_par
    scores.pluck(:score).sum - course.tee_boxes.find_by(tee: tee).par
  end 
  
end
