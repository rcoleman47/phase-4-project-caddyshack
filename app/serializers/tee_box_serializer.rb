class TeeBoxSerializer < ActiveModel::Serializer
  attributes :id, :tee, :color, :par
  has_one :course
end
