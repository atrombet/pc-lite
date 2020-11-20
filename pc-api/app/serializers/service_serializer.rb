class ServiceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :datetime

  has_many :positions
  has_many :people, through: :positions
end
