class CreatePositions < ActiveRecord::Migration[6.0]
  def change
    create_table :positions do |t|
      t.string :name
      t.belongs_to :service, null: false, foreign_key: true
      t.belongs_to :person, null: true, foreign_key: true

      t.timestamps
    end
  end
end
