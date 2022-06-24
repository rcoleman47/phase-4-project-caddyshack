class ScoresController < ApplicationController

  def update
    score.update!(score_params)
    render json: score, status: 202
  end

  private 

  def score_params
    params.permit(:score, :gir, :fir, :putts, :round_id)
  end

  def score
    Score.find(params[:id])
  end
end
