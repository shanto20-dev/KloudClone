class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: :destroy


    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            log_in!(@user)
            render :show
        else
            render json: ["Invalid username or password"], status: 401
        end 
    end

    def destroy
        log_out!
        render json: "Successfully logged out"
    end

end
