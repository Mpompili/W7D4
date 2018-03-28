#
#   json.party do
#     json.set! party.id  do
#       json.extract! party, :name, :location
#
#
#     end
#   end
#   json.guests do
#     json.array! party.guests, :name, :age, :favorite_color
# end
# end

# json.extract! @party, :name, :guests
json.name @party.name

json.guests @party.guests do |guest|
     json.name guest.name
     json.gifts guest.gifts, :title
end
