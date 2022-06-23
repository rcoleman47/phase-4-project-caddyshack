class User < ApplicationRecord
  has_secure_password

  has_many :rounds, dependent: :destroy
  has_many :scores, through: :rounds
  has_many :courses, through: :rounds
  has_many :tee_boxes, through: :courses

  validates :username, presence: true, uniqueness: true
  validates :email, uniqueness: true, format: URI::MailTo::EMAIL_REGEXP
  

  def rounds_played
    rounds.count
  end

  def avg_round_score
    scores.pluck(:score).sum / rounds_played
  end


end
