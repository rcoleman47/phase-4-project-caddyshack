class NewUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
end