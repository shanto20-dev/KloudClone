json.comment do 
    json.extract! @comment, :id, :song_id, :author_id, :body
    json.author @comment.author.username
end