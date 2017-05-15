class CreatePodcastsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :podcasts do |t|
      t.string :name, null: false
      t.string :category, null: false

      t.timestamps
    end
  end
end
