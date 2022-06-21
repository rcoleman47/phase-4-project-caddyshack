class UsersController < ApplicationController
  
  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.create!(user_params)
    session[user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end

end
