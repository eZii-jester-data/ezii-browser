# typed: false
class WitAiParseModelExamplesController < ApplicationController
  before_action :set_wit_ai_parse_model_example, only: [:show, :edit, :update, :destroy]

  # GET /wit_ai_parse_model_examples
  # GET /wit_ai_parse_model_examples.json
  def index
    @wit_ai_parse_model_examples = WitAiParseModelExample.all
  end

  # GET /wit_ai_parse_model_examples/1
  # GET /wit_ai_parse_model_examples/1.json
  def show
  end

  # GET /wit_ai_parse_model_examples/new
  def new
    @wit_ai_parse_model_example = WitAiParseModelExample.new
  end

  # GET /wit_ai_parse_model_examples/1/edit
  def edit
  end

  # POST /wit_ai_parse_model_examples
  # POST /wit_ai_parse_model_examples.json
  def create
    @wit_ai_parse_model_example = WitAiParseModelExample.new(wit_ai_parse_model_example_params)

    @wit_ai_parse_model_example.wit_ai_parse_model_id = 1 # TODO: FIXME
    respond_to do |format|
      if @wit_ai_parse_model_example.save
        format.html { redirect_to @wit_ai_parse_model_example, notice: 'Wit ai parse model example was successfully created.' }
        format.json { render :show, status: :created, location: @wit_ai_parse_model_example }
      else
        format.html { render :new }
        format.json { render json: @wit_ai_parse_model_example.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wit_ai_parse_model_examples/1
  # PATCH/PUT /wit_ai_parse_model_examples/1.json
  def update
    respond_to do |format|
      if @wit_ai_parse_model_example.update(wit_ai_parse_model_example_params)
        format.html { redirect_to @wit_ai_parse_model_example, notice: 'Wit ai parse model example was successfully updated.' }
        format.json { render :show, status: :ok, location: @wit_ai_parse_model_example }
      else
        format.html { render :edit }
        format.json { render json: @wit_ai_parse_model_example.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wit_ai_parse_model_examples/1
  # DELETE /wit_ai_parse_model_examples/1.json
  def destroy
    @wit_ai_parse_model_example.destroy
    respond_to do |format|
      format.html { redirect_to wit_ai_parse_model_examples_url, notice: 'Wit ai parse model example was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wit_ai_parse_model_example
      @wit_ai_parse_model_example = WitAiParseModelExample.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wit_ai_parse_model_example_params
      params.require(:wit_ai_parse_model_example).permit(
        # :wit_ai_parse_model_id, 
        :parsable_resource_entity_value_end_index, 
        :parsable_resource_entity_value_start_index,
        :parsable_resource_text,
        :entity_name,
        :entity_value,
        :parsable_resource_query,
        :parsable_resource
      )
    end
end
