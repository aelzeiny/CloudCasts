# == Schema Information
#
# Table name: episodes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  length      :integer          not null
#  release     :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Episode < ApplicationRecord
  validates :title, :description, :length, :release, presence: true
end
