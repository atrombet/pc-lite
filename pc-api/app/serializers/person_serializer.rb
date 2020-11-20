class PersonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email, :phone

  has_many :positions
  has_many :services, through: :positions
end
