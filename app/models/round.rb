class Round < ApplicationRecord
  belongs_to :user
  belongs_to :course

  has_many :scores, dependent: :destroy
end
