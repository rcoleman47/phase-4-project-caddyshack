class CoursesController < ApplicationController

  before_action :is_authorized, only: [:create, :update]
  
  def index
    courses = Course.all
    render json: courses
  end

  def show
    render json: course, serializer: SingleCourseSerializer
  end

  def create
    new_course = Course.create!(course_params)
    render json: new_course, status: 201
  end

  def update
    course.update!(course_params)
    render json: course, states: 202
  end


  private

  def course_params
    params.permit(:name, :address, :city, :state, :image_url)
  end

  def course
    Course.find(params[:id])
  end
  
end
