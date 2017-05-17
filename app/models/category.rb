class Category < ApplicationRecord
  validates :itunes_id, :genre, presence: true

  has_many :podcast_categories,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: "PodcastCategory"

  has_many :podcasts,
    through: :podcast_categories,
    source: :podcast
end
