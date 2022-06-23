class UsersController < ApplicationController
  
  def show
    current_user = User.find_by(id: session[:user_id])
    render json: current_user
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end

end
