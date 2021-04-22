json.set! @user.id do 
    json.extract! @user, :id, :username, :email, :img_url
    json.songs do 
        @user.songs.each do |song|
            json.set! song.id do
                json.extract! song, :id, :artist_id, :title, :genre, :description, :img_url, :created_at
                json.artist song.artist.username
            end
        end
    end
end