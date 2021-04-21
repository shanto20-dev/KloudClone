class Song < ApplicationRecord
    validates :artist_id, :title, presence: true
    belongs_to :artist, foreign_key: :artist_id, class_name: :User
    has_many :comments, foreign_key: :song_id, class_name: :Comment
    has_one_attached :audio
end
