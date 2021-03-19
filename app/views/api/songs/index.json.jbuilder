@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :artist_id, :title, :genre, :description, :img_url, :created_at, :src
        json.artist song.artist.username
    end
end
