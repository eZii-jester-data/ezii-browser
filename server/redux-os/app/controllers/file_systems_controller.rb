# typed: false
class FileSystemsController < ApplicationController
  before_action :set_file_system, only: [:show, :edit, :update, :destroy]

  # GET /file_systems
  # GET /file_systems.json
  def index
    @file_systems = FileSystem.all
  end

  # GET /file_systems/1
  # GET /file_systems/1.json
  def show
  end

  # GET /file_systems/new
  def new
    @file_system = FileSystem.new
  end

  # GET /file_systems/1/edit
  def edit
  end

  # POST /file_systems
  # POST /file_systems.json
  def create
    @file_system = FileSystem.new(file_system_params)

    respond_to do |format|
      if @file_system.save
        format.html { redirect_to @file_system, notice: 'File system was successfully created.' }
        format.json { render :show, status: :created, location: @file_system }
      else
        format.html { render :new }
        format.json { render json: @file_system.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /file_systems/1
  # PATCH/PUT /file_systems/1.json
  def update
    respond_to do |format|
      if @file_system.update(file_system_params)
        format.html { redirect_to @file_system, notice: 'File system was successfully updated.' }
        format.json { render :show, status: :ok, location: @file_system }
      else
        format.html { render :edit }
        format.json { render json: @file_system.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /file_systems/1
  # DELETE /file_systems/1.json
  def destroy
    @file_system.destroy
    respond_to do |format|
      format.html { redirect_to file_systems_url, notice: 'File system was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_file_system
      @file_system = FileSystem.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def file_system_params
      params.require(:file_system).permit(:description, :machine_readable_identifier)
    end
end
