# typed: false
class EziiOsFilesController < ApplicationController
  before_action :set_ezii_os_file, only: [:show, :edit, :update, :destroy]

  http_basic_authenticate_with name: "BANAL-TEAM", password: Rails.application.credentials.banal_team_password, if: :need_authentication?

 private

  def need_authentication?
    params[:admin].present?
  end

 public

  # GET /ezii_os_files
  # GET /ezii_os_files.json
  def index
    @ezii_os_files = EziiOsFile.all
  end

  # GET /ezii_os_files/1
  # GET /ezii_os_files/1.json
  def show
    @path = EziiOsPath.new(params[:id])

    case @path.file_system.machine_readable_identifier
    when 'local'
      @last_file_input = File.read(@path.file_system_path)
      
      if params[:id].match(/\/public\/(.*)\Z/)
        relative_path_to_file = params[:id].match(/\/public\/(.*)\Z/)[1]
        @path.https_url = '/' + relative_path_to_file.gsub(/\s/, '%20')
      else
        # @path.file_system_path = params[:id].gsub(/\A\/?local/, '')
        
        # @path.local_file_system_path = params[:id].gsub(/\A\/?local/, '')
      end
    when 'dropbox'
      bda = BanalDropboxApi.new

      §(
        ASSERT_NO_DROPBOX_API_ERRORS,
        TEMPFILES_MUST_BE_SUPPORTED,
        CHECK_FOR_TEMPFILE_NOT_REWINDED_ISSUE
      ) do
        bda.download(@path.file_system_path) do |file_content|
          @last_file_input = file_content
        
          t = Tempfile.new(['file', File.extname(@path.file_system_path)])
        
          t.binmode
          t.write(file_content)

          @path.local_file_system_path = t.path
        end
      end

      if File.extname(@path.file_system_path) == '.shp'
        remote_path = @path.file_system_path
        local_path = @path.local_file_system_path

        %w(.shx .dbf).each do |file_extension|
          §(
            ASSERT_NO_DROPBOX_API_ERRORS,
            TEMPFILES_MUST_BE_SUPPORTED,
            CHECK_FOR_TEMPFILE_NOT_REWINDED_ISSUE
          ) do
          
            bda.download(remote_path.gsub('.shp', file_extension)) do |file_content|            
              t = Tempfile.new(['file', file_extension])        
              t.binmode

              #TODO: figure out why this had to be attempted multiple times for the write to work

              t.write(file_content)
              
              #END-TODO
              
              t.rewind
            
              `ln -s #{t.path} #{local_path.gsub('.shp', file_extension)}`
              @path.complementary_local_file_system_paths.push(local_path.gsub('.shp', file_extension))
          end
          
          end
        end
      end

      @path.https_url = bda.get_link(@path.file_system_path) rescue nil
    end
  end

  # GET /ezii_os_files/new
  def new
    @ezii_os_file = EziiOsFile.new
  end

  # GET /ezii_os_files/1/edit
  def edit
  end

  # POST /ezii_os_files
  # POST /ezii_os_files.json
  def create
    @ezii_os_file = EziiOsFile.new(ezii_os_file_params)

    respond_to do |format|
      if @ezii_os_file.save
        format.html { redirect_to @ezii_os_file, notice: 'Ezii os file was successfully created.' }
        format.json { render :show, status: :created, location: @ezii_os_file }
      else
        format.html { render :new }
        format.json { render json: @ezii_os_file.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ezii_os_files/1
  # PATCH/PUT /ezii_os_files/1.json
  def update
    respond_to do |format|
      if @ezii_os_file.update(ezii_os_file_params)
        format.html { redirect_to @ezii_os_file, notice: 'Ezii os file was successfully updated.' }
        format.json { render :show, status: :ok, location: @ezii_os_file }
      else
        format.html { render :edit }
        format.json { render json: @ezii_os_file.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ezii_os_files/1
  # DELETE /ezii_os_files/1.json
  def destroy
    @ezii_os_file.destroy
    respond_to do |format|
      format.html { redirect_to ezii_os_files_url, notice: 'Ezii os file was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ezii_os_file
      # @ezii_os_file = EziiOsFile.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def ezii_os_file_params
      params.require(:ezii_os_file).permit(:file_path)
    end
end
