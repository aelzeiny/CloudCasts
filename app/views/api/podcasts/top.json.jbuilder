entries = @response['feed']['entry']
json.array!(entries) do |pod|
  json.name pod["title"]["label"]
  json.itunes_id pod["id"]["attributes"]["im:id"]
  json.itunes_genres [pod["category"]["attributes"]["im:id"]]
  json.image_url pod["im:image"][-1]["label"]
  json.md_image_url pod["im:image"][-1]["label"]
  json.sm_image_url pod["im:image"][0]["label"]
  json.publisher pod["im:artist"]["label"]

  # NOTE: Summary is not included in search
  json.summary pod["summary"]["label"]
end
