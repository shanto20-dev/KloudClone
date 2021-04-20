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

    def update
        @song = Song.find_by(id: params[:id])
        if @song && @song.update(song_params)
            render :show
        else
            render json: ["Song edit unsuccessful, please make sure have inputted all required fields"], status: 401
        end
    end

    def destroy
        @song = Song.find_by(id: params[:id])
        @song.destroy!
    end


    def song_params
        params.require(:song).permit(:artist_id, :title, :genre, :description, :img_url, :audio)
    end

end
