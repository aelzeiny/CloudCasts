class SeedPodcastCategories < ActiveRecord::Migration[5.0]
  def up
    cat_arts = Category.create({genre: "Arts", itunes_id: 1301})
    cat_business = Category.create({genre: "Business", itunes_id: 1321})
    cat_comedy = Category.create({genre: "Comedy", itunes_id: 1303})
    cat_education = Category.create({genre: "Education", itunes_id: 1304})
    cat_games_hobbies = Category.create({genre: "Games & Hobbies", itunes_id: 1323})
    cat_government = Category.create({genre: "Government & Organizations", itunes_id: 1325})
    cat_health = Category.create({genre: "Health", itunes_id: 1307})
    cat_kids_family = Category.create({genre: "Kids & Family", itunes_id: 1305})
    cat_music = Category.create({genre: "Music", itunes_id: 1310})
    cat_news_politics = Category.create({genre: "News & Politics", itunes_id: 1311})
    cat_religion_spirituality = Category.create({genre: "Religion & Spirituality", itunes_id: 1314})
    cat_science_medicine = Category.create({genre: "Science & Medicine", itunes_id: 1315})
    cat_society_culture = Category.create({genre: "Society & Culture", itunes_id: 1324})
    cat_sports_recreation = Category.create({genre: "Sports & Recreation", itunes_id: 1316})
    cat_technology = Category.create({genre: "Technology", itunes_id: 1318})
    cat_film = Category.create({genre: "Film", itunes_id: 1309})
  end

  def down
    Category.destroy_all
  end
end
