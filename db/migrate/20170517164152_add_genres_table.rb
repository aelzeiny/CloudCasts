class AddGenresTable < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.integer :itunes_id, null: false
      t.string :genre, null: false

      t.timestamps
    end

    add_index :categories, :itunes_id, unique: true
  end
end
