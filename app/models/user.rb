class User < ApplicationRecord
  has_secure_password

  has_many :rounds
  has_many :courses, through: :rounds

  validates :username, presence: true, uniqueness: true
  validates :email, uniqueness: true, format: URI::MailTo::EMAIL_REGEXP
  

end
