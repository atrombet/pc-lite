class Person < ApplicationRecord
  has_many :positions
  has_many :services, through: :positions
end
