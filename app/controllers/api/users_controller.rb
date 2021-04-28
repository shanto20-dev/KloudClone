class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user && @user.update(user_params)
            render :show
        else
            render json: ["Could not update - input all required fields"], status: 401
        end
    end


    def user_params
        params.require(:user).permit(:username, :password, :email, :img_url)
    end

end
