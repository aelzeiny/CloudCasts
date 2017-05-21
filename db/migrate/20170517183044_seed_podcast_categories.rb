class SeedPodcastCategories < ActiveRecord::Migration[5.0]
  def up
    Category.create({itunes_id: 1301, genre: 'Arts'})
    Category.create({itunes_id: 1306, genre: 'Food'})
    Category.create({itunes_id: 1401, genre: 'Literature'})
    Category.create({itunes_id: 1402, genre: 'Design'})
    Category.create({itunes_id: 1405, genre: 'Performing Arts'})
    Category.create({itunes_id: 1406, genre: 'Visual Arts'})
    Category.create({itunes_id: 1459, genre: 'Fashion & Beauty'})
    Category.create({itunes_id: 1303, genre: 'Comedy'})
    Category.create({itunes_id: 1304, genre: 'Education'})
    Category.create({itunes_id: 1415, genre: 'K–12'})
    Category.create({itunes_id: 1416, genre: 'Higher Education'})
    Category.create({itunes_id: 1468, genre: 'Educational Technology'})
    Category.create({itunes_id: 1469, genre: 'Language Courses'})
    Category.create({itunes_id: 1470, genre: 'Training'})
    Category.create({itunes_id: 1305, genre: 'Kids & Family'})
    Category.create({itunes_id: 1307, genre: 'Health'})
    Category.create({itunes_id: 1417, genre: 'Fitness & Nutrition'})
    Category.create({itunes_id: 1420, genre: 'Self-Help'})
    Category.create({itunes_id: 1421, genre: 'Sexuality'})
    Category.create({itunes_id: 1481, genre: 'Alternative Health'})
    Category.create({itunes_id: 1309, genre: 'TV & Film'})
    Category.create({itunes_id: 1310, genre: 'Music'})
    Category.create({itunes_id: 1311, genre: 'News & Politics'})
    Category.create({itunes_id: 1314, genre: 'Religion & Spirituality'})
    Category.create({itunes_id: 1438, genre: 'Buddhism'})
    Category.create({itunes_id: 1439, genre: 'Christianity'})
    Category.create({itunes_id: 1440, genre: 'Islam'})
    Category.create({itunes_id: 1441, genre: 'Judaism'})
    Category.create({itunes_id: 1444, genre: 'Spirituality'})
    Category.create({itunes_id: 1463, genre: 'Hinduism'})
    Category.create({itunes_id: 1464, genre: 'Other'})
    Category.create({itunes_id: 1315, genre: 'Science & Medicine'})
    Category.create({itunes_id: 1477, genre: 'Natural Sciences'})
    Category.create({itunes_id: 1478, genre: 'Medicine'})
    Category.create({itunes_id: 1479, genre: 'Social Sciences'})
    Category.create({itunes_id: 1316, genre: 'Sports & Recreation'})
    Category.create({itunes_id: 1456, genre: 'Outdoor'})
    Category.create({itunes_id: 1465, genre: 'Professional'})
    Category.create({itunes_id: 1466, genre: 'College & High School'})
    Category.create({itunes_id: 1467, genre: 'Amateur'})
    Category.create({itunes_id: 1318, genre: 'Technology'})
    Category.create({itunes_id: 1446, genre: 'Gadgets'})
    Category.create({itunes_id: 1448, genre: 'Tech News'})
    Category.create({itunes_id: 1450, genre: 'Podcasting'})
    Category.create({itunes_id: 1480, genre: 'Software How-To'})
    Category.create({itunes_id: 1321, genre: 'Business'})
    Category.create({itunes_id: 1410, genre: 'Careers'})
    Category.create({itunes_id: 1412, genre: 'Investing'})
    Category.create({itunes_id: 1413, genre: 'Management & Marketing'})
    Category.create({itunes_id: 1471, genre: 'Business News'})
    Category.create({itunes_id: 1472, genre: 'Shopping'})
    Category.create({itunes_id: 1323, genre: 'Games & Hobbies'})
    Category.create({itunes_id: 1404, genre: 'Video Games'})
    Category.create({itunes_id: 1454, genre: 'Automotive'})
    Category.create({itunes_id: 1455, genre: 'Aviation'})
    Category.create({itunes_id: 1460, genre: 'Hobbies'})
    Category.create({itunes_id: 1461, genre: 'Other Games'})
    Category.create({itunes_id: 1324, genre: 'Society & Culture'})
    Category.create({itunes_id: 1302, genre: 'Personal Journals'})
    Category.create({itunes_id: 1320, genre: 'Places & Travel'})
    Category.create({itunes_id: 1443, genre: 'Philosophy'})
    Category.create({itunes_id: 1462, genre: 'History'})
    Category.create({itunes_id: 1325, genre: 'Government & Organizations'})
    Category.create({itunes_id: 1473, genre: 'National'})
    Category.create({itunes_id: 1474, genre: 'Regional'})
    Category.create({itunes_id: 1475, genre: 'Local'})
    Category.create({itunes_id: 1476, genre: 'Non-Profit'})
  end

  def down
    Category.delete_all
  end
end
