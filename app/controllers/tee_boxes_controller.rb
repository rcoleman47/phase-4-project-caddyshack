class TeeBoxesController < ApplicationController

  def index
    tee_boxes = TeeBox.all
    render json: tee_boxes
  end

  def show
    tee = TeeBox.find(params[:id])
    render json: tee
  end

  def create
    tee = TeeBox.create!(tee_params)
    render json: tee
  end


  private 

  def tee_params
    params.permit(:tee, :color, :par, :course_id)
  end
 
end
