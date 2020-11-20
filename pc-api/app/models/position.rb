class Position < ApplicationRecord
  belongs_to :service
  belongs_to :person
end
