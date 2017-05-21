json.partial! 'api/podcasts/cast', pod: @podcast
json.description @feed.description
json.super_img @feed.itunes_image
json.episodes @episodes
