# == Schema Information
#
# Table name: podcast_categories
#
#  id          :integer          not null, primary key
#  podcast_id  :integer
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

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
