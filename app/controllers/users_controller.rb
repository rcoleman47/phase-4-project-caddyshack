class UsersController < ApplicationController
  
  def show
    current_user = User.find_by(id: session[:user_id])
    if current_user
      render json: current_user
    else
      render json: { error: "not singed in"}, status: :not_found
    end
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
