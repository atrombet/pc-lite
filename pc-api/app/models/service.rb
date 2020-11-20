class Service < ApplicationRecord
  has_many :positions
  has_many :people, through: :positions
end
