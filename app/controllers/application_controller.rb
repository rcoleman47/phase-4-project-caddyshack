class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid


  def current_user
    User.find_by(id: session[:user_id])
  end 

  def is_authorized
    return render json: { error: "Not Authorized" }, status: :unauthorized unless current_user 
  end

  private

  def render_not_found(error)
    render json: { error: error }, status: :not_found
  end

  def render_invalid(invalid)
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
  
end
