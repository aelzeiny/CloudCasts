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
end
