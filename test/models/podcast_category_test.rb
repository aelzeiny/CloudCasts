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

require 'test_helper'

class PodcastCategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
