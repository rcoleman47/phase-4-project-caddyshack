class RoundsController < ApplicationController
  before_action :is_authorized, only: [:create, :update, :destroy]
  def index
    rounds = current_user.rounds
    render json: rounds
  end

  def show
    render json: round, serializer: SingleRoundSerializer
  end

  def create
    new_round = Round.create!(round_params)
    (1..18).each do |i|
      Score.create!(hole_number: i, score: 4, gir: true, fir: true, round_id: new_round.id)
    end
    render json: new_round, status: 201
  end

  def update
    round.update(tee: params[:tee])
    render json: round, serializer: SingleRoundSerializer, states: 202
  end

  def destroy
    round.destroy
    head :no_content
  end


  private

  def round_params
    params.permit(:user_id, :course_id, :tee)
  end

  def round
    Round.find(params[:id])
  end
end
