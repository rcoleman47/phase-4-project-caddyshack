class HolesController < ApplicationController

  def index
    holes = Hole.all
    render json: holes
  end

  def show
    hole = Hole.find(params[:id])
    render json: hole
  end

  def create
    hole = Hole.create!(hole_params)
    render json: hole
  end


  private 

  def hole_params
    params.permit(:number, :distance, :par, :tee_box_id, :handicap)
  end

end
