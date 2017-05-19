json.array!(@response) do |pod|
  json.name pod["collectionName"]
  json.itunes_id pod["collectionId"]
  json.publisher pod["artistName"]
  json.itunes_genres pod["genreIds"]
  json.image_url pod["artworkUrl600"]
  json.sm_image_url pod["artworkUrl30"]
  json.md_image_url pod["artworkUrl100"]
  # json.summary pod["summary"]
  json.data pod
end
