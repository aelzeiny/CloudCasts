json.extract! user, :id, :username
json.favorite_benches user.podcasts.pluck(:id)
