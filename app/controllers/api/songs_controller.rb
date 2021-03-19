class Api::SongsController < ApplicationController

    def index
        @songs = Song.all
        render :index
    end

    def create
        @song = Song.new(song_params)
        if @song.save
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def show
        @song = Song.find_by(id: params[:id])
        render :show
    end


    def song_params
        params.require(:song).permit(:artist_id, :title, :genre, :description, :img_url, :src)
    end

end
