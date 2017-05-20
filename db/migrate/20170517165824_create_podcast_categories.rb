class CreatePodcastCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :podcast_categories do |t|
      t.integer :podcast_id
      t.integer :category_id

      t.timestamps
    end
  end
end
