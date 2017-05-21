class AddFeedUrl < ActiveRecord::Migration[5.0]
  def change
    add_column :podcasts, :feed_url, :string, limit: 2200
    change_column_null :podcasts, :feed_url, false
  end
end
