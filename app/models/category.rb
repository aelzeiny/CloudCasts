# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  itunes_id  :integer          not null
#  genre      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
