class AddSearchIndexOptimizationOfForiegnKeys < ActiveRecord::Migration[5.0]
  def change
    add_index :subscriptions, [:user_id, :podcast_id], unique: true
    add_index :podcast_categories, [:podcast_id, :category_id], unique: true
  end
end
