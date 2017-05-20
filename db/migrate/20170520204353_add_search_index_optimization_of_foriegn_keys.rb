class AddSearchIndexOptimizationOfForiegnKeys < ActiveRecord::Migration[5.0]
  def change
    add_index :subscriptions, :user_id, unique: true
    add_index :subscriptions, :podcast_id, unique: true
    add_index :podcast_categories, :podcast_id, unique: true
    add_index :podcast_categories, :category_id, unique: true
  end
end
