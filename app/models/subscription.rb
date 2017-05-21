# == Schema Information
#
# Table name: subscriptions
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  podcast_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscription < ApplicationRecord
  validates :user, :podcast, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :podcast,
    primary_key: :itunes_id,
    foreign_key: :podcast_id,
    class_name: 'Podcast'

  has_many :podcasts_for_user,
    through: :user,
    source: :podcasts
end
