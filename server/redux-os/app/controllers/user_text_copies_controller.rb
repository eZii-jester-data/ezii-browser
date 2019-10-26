# typed: false
class UserTextCopiesController < ApplicationController
  before_action :set_user_text_copy, only: [:show, :edit, :update, :destroy]

  skip_before_action :verify_authenticity_token
  # skip_before_action :gdpr_compliance

  # GET /user_text_copies
  # GET /user_text_copies.json
  def index
    @user_text_copies = UserTextCopy.all
  end

  # GET /user_text_copies/1
  # GET /user_text_copies/1.json
  def show
    if params[:id] == 'next_paste'
      utc = UserTextCopy.last

      paste = utc.copies.split(',').last(10).reverse[-utc.pastes_used]
      render plain: paste, layout: nil
    end
  end

  # GET /user_text_copies/new
  def new
    @user_text_copy = UserTextCopy.new
  end

  # GET /user_text_copies/1/edit
  def edit
  end

  def pasted_one
    # params[:id] == 'latest'
    utc = UserTextCopy.last
    utc.pasting_started = true
    utc.pastes_used += 1
    utc.save!
  end

  # POST /user_text_copies
  # POST /user_text_copies.json
  def create
    fail "no adult" unless ENV["EZII_ADULT_PASSWORD"] == params["ezii_adult_password"]
    fail if UserTextCopy.last.pasting_started
    @ezii_adult_verify_and_signin = EziiAdultVerifyAndSignin.new(ezii_adult_verify_and_signin_params)

    @user_text_copy = UserTextCopy.new(user_text_copy_params)

    @user_text_copy.ezii_adult_verify_and_signin = @ezii_adult_verify_and_signin
    respond_to do |format|
      if @user_text_copy.save!

        # §
        §(LIMIT_SQL_SELECT_TO_TEN_TOTAL_RECORDS) do
          copies  = []
          §⚕(LIMIT_SQL_SELECT_TO_TEN_TOTAL_RECORDS) do
            # copies = @user_text_copy.copies.limit(10)
            ladder
          end
          # byebug  
          # ⚕
          ActionCable.server.broadcast(
              "all",
              copies: copies,
              pastes: copies.reverse
          )
        end
        format.html { redirect_to @user_text_copy, notice: 'User text copy was successfully created.' }
        format.json { render :show, status: :created, location: @user_text_copy }
      else
        format.html { render :new }
        format.json { render json: @user_text_copy.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /user_text_copies/1
  # PATCH/PUT /user_text_copies/1.json
  def update
    respond_to do |format|
      if @user_text_copy.update(user_text_copy_params)
        format.html { redirect_to @user_text_copy, notice: 'User text copy was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_text_copy }
      else
        format.html { render :edit }
        format.json { render json: @user_text_copy.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_text_copies/1
  # DELETE /user_text_copies/1.json
  def destroy
    @user_text_copy.destroy
    respond_to do |format|
      format.html { redirect_to user_text_copies_url, notice: 'User text copy was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_text_copy
      unless params[:id] == 'next_paste'
        @user_text_copy = UserTextCopy.find(params[:id])
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_text_copy_params
      params.require(:user_text_copy).permit(:ezii_adult_verify_and_signin_id, :copies)
    end

    def ezii_adult_verify_and_signin_params
      params.require(:ezii_adult_verify_and_signin).permit(:user_name, :scm_id, :shell_script_used, :when_will_scm_scl011_be_available_as_rubygem_integration)
    end
end
