class User < ApplicationRecord
  has_secure_password

  validates_presence_of :username, :password
  validates_uniqueness_of :username, :email
  validates_format_of :email, URI::MailTo::EMAIL_REGEXP
  

end
