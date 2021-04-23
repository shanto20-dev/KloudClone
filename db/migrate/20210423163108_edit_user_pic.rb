class EditUserPic < ActiveRecord::Migration[5.2]
  def change
    change_column_default :users, :img_url, "https://i1.sndcdn.com/avatars-000039709460-h210g8-t500x500.jpg"
  end
end
