json.set! @song.id do 
    json.extract! @song, :id, :artist_id, :title, :genre, :description, :img_url, :created_at, :src
    json.artist @song.artist.username
    json.songUrl url_for(@song.audio)
end

json.comments do
    @song.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :author_id, :track_id, :created_at
            json.author comment.author.username
        end
    end
end