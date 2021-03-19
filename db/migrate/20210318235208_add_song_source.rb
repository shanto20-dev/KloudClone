class AddSongSource < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :src, :string 
  end
end
