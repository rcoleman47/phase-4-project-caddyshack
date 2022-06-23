class TeeBoxesController < ApplicationController

  def index
    tee_boxes = TeeBox.all
    render json: tee_boxes
  end

  def show
    render json: tee_box, serializer: SingleTeeSerializer
  end

  def create
    tee = TeeBox.create!(tee_params)
    (1..18).each do |i|
      Hole.create!(number: i, par: 4, distance: 400, handicap: i, tee_box_id: tee.id)
    end
    render json: tee
  end

  def update
    tee_box.update!(tee_params)
    render json: tee_box, serializer: SingleTeeSerializer, status: 202
  end

  private 

  def tee_params
    params.permit(:tee, :color, :par, :slope, :rating, :course_id)
  end

  def tee_box
    TeeBox.find(params[:id])
  end
 
end
