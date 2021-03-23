@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :artist_id, :title, :genre, :description, :img_url, :created_at
        json.artist song.artist.username
        json.songUrl url_for(song.audio)
    end
end
