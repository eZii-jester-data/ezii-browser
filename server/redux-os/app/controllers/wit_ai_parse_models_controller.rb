# typed: false
class WitAiParseModelsController < ApplicationController
  before_action :set_wit_ai_parse_model, only: [:show, :edit, :update, :destroy]

  # GET /wit_ai_parse_models
  # GET /wit_ai_parse_models.json
  def index
    @wit_ai_parse_models = WitAiParseModel.all
  end

  # GET /wit_ai_parse_models/1
  # GET /wit_ai_parse_models/1.json
  def show
  end

  # GET /wit_ai_parse_models/new
  def new
    @wit_ai_parse_model = WitAiParseModel.new
  end

  # GET /wit_ai_parse_models/1/edit
  def edit
  end

  # POST /wit_ai_parse_models
  # POST /wit_ai_parse_models.json
  def create
    @wit_ai_parse_model = WitAiParseModel.new(wit_ai_parse_model_params)

    respond_to do |format|
      if @wit_ai_parse_model.save
        format.html { redirect_to @wit_ai_parse_model, notice: 'Wit ai parse model was successfully created.' }
        format.json { render :show, status: :created, location: @wit_ai_parse_model }
      else
        format.html { render :new }
        format.json { render json: @wit_ai_parse_model.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wit_ai_parse_models/1
  # PATCH/PUT /wit_ai_parse_models/1.json
  def update
    respond_to do |format|
      if @wit_ai_parse_model.update(wit_ai_parse_model_params)
        format.html { redirect_to @wit_ai_parse_model, notice: 'Wit ai parse model was successfully updated.' }
        format.json { render :show, status: :ok, location: @wit_ai_parse_model }
      else
        format.html { render :edit }
        format.json { render json: @wit_ai_parse_model.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wit_ai_parse_models/1
  # DELETE /wit_ai_parse_models/1.json
  def destroy
    @wit_ai_parse_model.destroy
    respond_to do |format|
      format.html { redirect_to wit_ai_parse_models_url, notice: 'Wit ai parse model was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wit_ai_parse_model
      @wit_ai_parse_model = WitAiParseModel.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wit_ai_parse_model_params
      params.require(:wit_ai_parse_model).permit(:wit_ai_client_token, :wit_ai_server_token)
    end
end
