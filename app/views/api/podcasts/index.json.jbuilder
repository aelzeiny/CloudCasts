json.array! @podcasts do |pod|
  json.partial! "api/podcasts/cast", pod: pod
end
