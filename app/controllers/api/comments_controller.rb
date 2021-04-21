class CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        if @comment.save
            render :show
        else
            render json: ["Comment not created, please make sure your comment is valid."], status: 401
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment
            @comment.destroy
        end
        render json: {}
    end

    def comment_params
        params.require(:comment).permit(:body, :song_id)
    end

end
