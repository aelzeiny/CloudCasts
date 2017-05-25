json.array! @subs.each do |sub|
  json.extract! sub, :id, :user_id, :podcast_id
end
