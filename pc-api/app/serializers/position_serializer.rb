class PositionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_one :person
  has_one :service
end
