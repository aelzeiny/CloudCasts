# == Schema Information
#
# Table name: podcasts
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Podcast < ApplicationRecord
  validates :name, :category, presence: true

  has_many :subscriptions,
    primary_key: :id,
    foreign_key: :podcast_id,
    class_name: 'Subscription'

  has_many :users,
    through: :subscriptions,
    source: :user

  has_many :podcast_categories,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: "PodcastCategory"

  has_many :categories,
    through: :podcast_categories,
    source: :category
end
