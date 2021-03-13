class Api::UsersController < ApplicationController
    before_action :ensure_logged_in, only: [:show, :index]

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


    def user_params
        params.require(:user).permit(:username, :password, :email)
    end

end
