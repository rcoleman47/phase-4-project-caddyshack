class HoleSerializer < ActiveModel::Serializer
  attributes :id, :number, :par, :distance, :handicap
  has_one :tee_box

end
