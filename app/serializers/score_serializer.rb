class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :hole_number, :score, :gir, :fir, :putts
  has_one :round
end
