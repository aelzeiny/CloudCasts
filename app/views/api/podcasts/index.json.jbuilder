json.array! @podcasts do |pod|
  json.partial "podcast_view", pod: pod
end
