class RemoveCategoryFromPodcast < ActiveRecord::Migration[5.0]
  def change
    remove_column :podcasts, :category, :string
  end
end
