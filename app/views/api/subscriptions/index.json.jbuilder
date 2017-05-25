json.array! @subs.each do |sub|
  json.partial! 'sub', sub: sub
end
