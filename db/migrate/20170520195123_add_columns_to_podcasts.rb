class AddColumnsToPodcasts < ActiveRecord::Migration[5.0]
  def change
    add_column :podcasts, :publisher, :string
    change_column_null :podcasts, :publisher, false

    add_column :podcasts, :image_url, :string, limit: 2200
    change_column_null :podcasts, :image_url, false

    add_column :podcasts, :sm_image_url, :string, limit: 2200

    add_column :podcasts, :md_image_url, :string, limit: 2200
  end
end
