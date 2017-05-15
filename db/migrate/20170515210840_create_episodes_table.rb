class CreateEpisodesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :episodes do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :length, null: false
      t.datetime :release, null: false

      t.timestamps
    end
  end
end
