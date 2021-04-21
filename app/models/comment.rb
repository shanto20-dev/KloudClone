class Comment < ApplicationRecord
    validates :author_id, :body, :song_id, presence: true
    belongs_to :author, foreign_key: :author_id, class_name: :User
    belongs_to :song, foreign_key: :song_id, class_name: :Song

    has_one_attached :audio
end
