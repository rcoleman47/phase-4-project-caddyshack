class SessionsController < ApplicationController

  def login
    user = User.find(params[:username])
    if user&.authenticate(params[:password])
      sessions[user_id] = user.id
      render json: user, status: :ok
    else 
      render json: { error: "Invalid Password and/or Username" },  status: :unauthorized
    end
  end

  def logout
    session.delete :user_id
    render json: { message: "You've been logged out successfully" }
  end

end
