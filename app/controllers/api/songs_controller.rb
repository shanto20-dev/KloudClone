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
            render json: ["Song upload unsuccessful, please make sure you have inputted all required fields."], status: 401
        end
    end

    def show
        @song = Song.find_by(id: params[:id])
        render :show
    end


    def song_params
        params.require(:song).permit(:artist_id, :title, :genre, :description, :img_url, :audio)
    end

end
