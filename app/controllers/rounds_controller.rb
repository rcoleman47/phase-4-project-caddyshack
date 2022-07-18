class RoundsController < ApplicationController

  def index
    rounds = current_user.rounds
    render json: rounds
  end

  def show
    render json: round
  end

  def create
    new_round = Round.create!(round_params)
    (1..18).each do |i|
      Score.create!(hole_number: i, score: 4, gir: true, fir: true, putts: 2, round_id: new_round.id)
    end
    render json: new_round, status: 201
  end

  def update
    round.update(tee: params[:tee])
    render json: round, states: 202
  end

  def destroy
    render json: round, status: 204
    round.destroy
  end


  private

  def round_params
    params.permit(:user_id, :course_id, :tee)
  end

  def round
    Round.find(params[:id])
  end
end
