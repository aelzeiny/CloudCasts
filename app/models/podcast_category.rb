class PodcastCategory < ApplicationRecord
  validates :user, :podcast, presence: true

  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: "User"

  belongs_to :podcast,
    primary_key: :id,
    foreign_key: :podcast_id,
    class_name: "Podcast"
end
