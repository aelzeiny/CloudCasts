json.array! @podcasts do |pod|
  json.extract! pod, :name, :itunes_id, :publisher, :image_url, :sm_image_url, :md_image_url, :itunes_genres
  json.array!
end
