# typed: strict
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_18_215307) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "btree_gin"
  enable_extension "btree_gist"
  enable_extension "citext"
  enable_extension "cube"
  enable_extension "dblink"
  enable_extension "dict_int"
  enable_extension "dict_xsyn"
  enable_extension "earthdistance"
  enable_extension "fuzzystrmatch"
  enable_extension "hstore"
  enable_extension "intarray"
  enable_extension "ltree"
  enable_extension "pg_stat_statements"
  enable_extension "pg_trgm"
  enable_extension "pgcrypto"
  enable_extension "pgrowlocks"
  enable_extension "pgstattuple"
  enable_extension "plpgsql"
  enable_extension "tablefunc"
  enable_extension "unaccent"
  enable_extension "uuid-ossp"
  enable_extension "xml2"

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "address_searches", force: :cascade do |t|
    t.text "sentiment"
    t.text "search_string"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "apis", force: :cascade do |t|
    t.text "rfc"
    t.integer "rftrolling_foreign_key"
    t.bigint "code_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["code_id"], name: "index_apis_on_code_id"
    t.index ["rftrolling_foreign_key"], name: "index_apis_on_rftrolling_foreign_key", unique: true
  end

  create_table "app_detection_analyses", force: :cascade do |t|
    t.bigint "app_detection_id", null: false
    t.float "confidence"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "app_type"
    t.text "jester_os_global_path"
    t.index ["app_detection_id"], name: "index_app_detection_analyses_on_app_detection_id"
  end

  create_table "app_detection_strategies", force: :cascade do |t|
    t.bigint "app_detection_id", null: false
    t.text "implementation_in_ruby_dsl"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["app_detection_id"], name: "index_app_detection_strategies_on_app_detection_id"
  end

  create_table "app_detections", force: :cascade do |t|
    t.string "app_type"
    t.text "strategy"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "banal_brainstorms", force: :cascade do |t|
    t.text "idea"
    t.string "main_category"
    t.string "priority"
    t.string "status"
    t.text "comments"
    t.string "idea_owner"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_banal_brainstorms_on_deleted_at"
  end

  create_table "banal_business_testcases", force: :cascade do |t|
    t.string "org_id"
    t.string "name"
    t.text "metainfo"
    t.string "link"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "banal_complexes", force: :cascade do |t|
    t.integer "weight"
    t.integer "parent_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.decimal "weight_of_identity_plus_children", precision: 100, scale: 2
  end

  create_table "banal_documents", force: :cascade do |t|
    t.text "global_path"
    t.bigint "banal_metadata_id", null: false
    t.bigint "banal_related_object_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "dropbox_file_id"
    t.index ["banal_metadata_id"], name: "index_banal_documents_on_banal_metadata_id"
    t.index ["banal_related_object_id"], name: "index_banal_documents_on_banal_related_object_id"
  end

  create_table "banal_employees", force: :cascade do |t|
    t.text "Facebook"
    t.text "Linkedin"
    t.text "Role"
    t.text "e_mail"
    t.text "Mobile"
    t.text "Address"
    t.text "Country"
    t.text "Full_Name"
    t.text "Last_Name_2"
    t.text "Last_Name_1"
    t.text "Middle_Name"
    t.text "First_Name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "banal_links", force: :cascade do |t|
    t.text "uri"
    t.bigint "banal_metadata_id", null: false
    t.bigint "banal_related_object_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["banal_metadata_id"], name: "index_banal_links_on_banal_metadata_id"
    t.index ["banal_related_object_id"], name: "index_banal_links_on_banal_related_object_id"
  end

  create_table "banal_metadata", force: :cascade do |t|
    t.text "category"
    t.string "language"
    t.text "sub_category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "banal_projects", force: :cascade do |t|
    t.string "name"
    t.string "main_category"
    t.string "priority"
    t.string "status"
    t.string "launch_date"
    t.text "comments"
    t.string "project_manager"
    t.string "idea_owner"
    t.string "dev_budget_cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "banal_related_objects", force: :cascade do |t|
    t.integer "object_id", null: false
    t.string "object_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "basecamp_integrations", force: :cascade do |t|
    t.string "description"
    t.text "code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "big_discrete_modules", force: :cascade do |t|
    t.text "why"
    t.text "how"
    t.text "what"
    t.text "when"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "blazer_audits", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "query_id"
    t.text "statement"
    t.string "data_source"
    t.datetime "created_at"
    t.index ["query_id"], name: "index_blazer_audits_on_query_id"
    t.index ["user_id"], name: "index_blazer_audits_on_user_id"
  end

  create_table "blazer_checks", force: :cascade do |t|
    t.bigint "creator_id"
    t.bigint "query_id"
    t.string "state"
    t.string "schedule"
    t.text "emails"
    t.text "slack_channels"
    t.string "check_type"
    t.text "message"
    t.datetime "last_run_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["creator_id"], name: "index_blazer_checks_on_creator_id"
    t.index ["query_id"], name: "index_blazer_checks_on_query_id"
  end

  create_table "blazer_dashboard_queries", force: :cascade do |t|
    t.bigint "dashboard_id"
    t.bigint "query_id"
    t.integer "position"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dashboard_id"], name: "index_blazer_dashboard_queries_on_dashboard_id"
    t.index ["query_id"], name: "index_blazer_dashboard_queries_on_query_id"
  end

  create_table "blazer_dashboards", force: :cascade do |t|
    t.bigint "creator_id"
    t.text "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["creator_id"], name: "index_blazer_dashboards_on_creator_id"
  end

  create_table "blazer_queries", force: :cascade do |t|
    t.bigint "creator_id"
    t.string "name"
    t.text "description"
    t.text "statement"
    t.string "data_source"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["creator_id"], name: "index_blazer_queries_on_creator_id"
  end

  create_table "code_change_requests", force: :cascade do |t|
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "code_link_batches", force: :cascade do |t|
    t.string "description"
    t.bigint "code_link_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["code_link_id"], name: "index_code_link_batches_on_code_link_id"
  end

  create_table "code_link_types", force: :cascade do |t|
    t.text "type_description"
    t.bigint "type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["type_id"], name: "index_code_link_types_on_type_id"
  end

  create_table "code_links", force: :cascade do |t|
    t.text "link"
    t.bigint "code_link_type_id", null: false
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["code_link_type_id"], name: "index_code_links_on_code_link_type_id"
  end

  create_table "codes", force: :cascade do |t|
    t.string "github_link"
    t.string "gist_link"
    t.bigint "code_links_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["code_links_id"], name: "index_codes_on_code_links_id"
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "banal_brainstorm_id"
    t.text "comment_text"
    t.integer "parent_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["banal_brainstorm_id"], name: "index_comments_on_banal_brainstorm_id"
    t.index ["parent_id"], name: "index_comments_on_parent_id", unique: true
  end

  create_table "cookie_changes", force: :cascade do |t|
    t.string "identifier"
    t.string "value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "copies", force: :cascade do |t|
    t.text "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "directories", force: :cascade do |t|
    t.string "path"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "employees", force: :cascade do |t|
    t.text "Facebook"
    t.text "Linkedin"
    t.text "Role"
    t.text "e_mail"
    t.text "Mobile"
    t.text "Address"
    t.text "Country"
    t.text "Full_Name"
    t.text "Last_Name_2"
    t.text "Last_Name_1"
    t.text "Middle_Name"
    t.text "First_Name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_adult_verify_and_signins", force: :cascade do |t|
    t.string "user_name"
    t.string "scm_id"
    t.string "shell_script_used"
    t.text "when_will_scm_scl011_be_available_as_rubygem_integration"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_cities", force: :cascade do |t|
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_delta_directions", force: :cascade do |t|
    t.bigint "ezii_delta_git_id", null: false
    t.integer "direction_y"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ezii_delta_git_id"], name: "index_ezii_delta_directions_on_ezii_delta_git_id"
  end

  create_table "ezii_delta_gits", force: :cascade do |t|
    t.date "git_commit_created_at"
    t.text "github_commit_link"
    t.string "git"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_geminators", force: :cascade do |t|
    t.text "graphql_query_text"
    t.text "url_text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_integrations", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_os_files", force: :cascade do |t|
    t.string "file_path"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_refactoring_combies", force: :cascade do |t|
    t.text "text"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_robot_experiments", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_seeds", force: :cascade do |t|
    t.text "github_link"
    t.text "gist_link"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_teamworks", force: :cascade do |t|
    t.text "employee_graph_svg_text"
    t.text "medium_link"
    t.text "ezii_game_x_zip_download_link"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ezii_zappings", force: :cascade do |t|
    t.text "previous_url"
    t.text "next_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "file_systems", force: :cascade do |t|
    t.string "description"
    t.string "machine_readable_identifier"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "gltf_models", force: :cascade do |t|
    t.text "global_path"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "bin_global_path"
    t.text "textures_directory_global_path"
  end

  create_table "hart_science_experiments", force: :cascade do |t|
    t.text "text"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hart_sciene_experiments", force: :cascade do |t|
    t.text "text"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "kmz_models", force: :cascade do |t|
    t.text "description"
    t.string "global_path"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "local_law_pipelines", force: :cascade do |t|
    t.text "title"
    t.text "paragraph"
    t.text "local_law_link"
    t.integer "paragraph_number"
    t.string "book"
    t.bigint "local_law_pipeline_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["local_law_pipeline_id"], name: "index_local_law_pipelines_on_local_law_pipeline_id"
  end

  create_table "makes", force: :cascade do |t|
    t.text "what_will_i_make"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "mega_os_paths", force: :cascade do |t|
    t.text "global_path"
    t.bigint "comment_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comment_id"], name: "index_mega_os_paths_on_comment_id"
  end

  create_table "mercurials", force: :cascade do |t|
    t.text "ezii_os_global_path"
    t.text "detected_app_type"
    t.integer "level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "partners_get_paids", force: :cascade do |t|
    t.integer "enter_invoice_number"
    t.string "you_will_receive_this_when_question_mark"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "searches", force: :cascade do |t|
    t.string "query"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "searchjoy_searches", force: :cascade do |t|
    t.bigint "user_id"
    t.string "search_type"
    t.string "query"
    t.string "normalized_query"
    t.integer "results_count"
    t.datetime "created_at"
    t.string "convertable_type"
    t.bigint "convertable_id"
    t.datetime "converted_at"
    t.index ["convertable_type", "convertable_id"], name: "index_searchjoy_searches_on_convertable"
    t.index ["created_at"], name: "index_searchjoy_searches_on_created_at"
    t.index ["search_type", "created_at"], name: "index_searchjoy_searches_on_search_type_and_created_at"
    t.index ["search_type", "normalized_query", "created_at"], name: "index_searchjoy_searches_on_search_type_query"
    t.index ["user_id"], name: "index_searchjoy_searches_on_user_id"
  end

  create_table "stick_records", force: :cascade do |t|
    t.text "identifier"
    t.text "modifiers"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.integer "reward"
    t.string "title"
    t.text "briefing"
    t.string "cta_copy"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "types", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "unzips", force: :cascade do |t|
    t.string "zip_file_path"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "target_dir_path"
  end

  create_table "user_text_copies", force: :cascade do |t|
    t.bigint "ezii_adult_verify_and_signin_id", null: false
    t.text "copies"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "pastes_used", default: 0
    t.boolean "pasting_started"
    t.index ["ezii_adult_verify_and_signin_id"], name: "index_user_text_copies_on_ezii_adult_verify_and_signin_id"
  end

  create_table "visualizations", force: :cascade do |t|
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "waymo_slomos", force: :cascade do |t|
    t.integer "banal_brainstorm_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["banal_brainstorm_id"], name: "index_waymo_slomos_on_banal_brainstorm_id", unique: true
  end

  create_table "whitelabel_system_extensions", force: :cascade do |t|
    t.text "rfc"
    t.bigint "comment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comment_id"], name: "index_whitelabel_system_extensions_on_comment_id"
  end

  create_table "widgets", force: :cascade do |t|
    t.text "web_assembly_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "wit_ai_parse_model_examples", force: :cascade do |t|
    t.bigint "wit_ai_parse_model_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "entity_name"
    t.string "entity_value"
    t.string "parsable_resource"
    t.string "parsable_resource_query"
    t.text "parsable_resource_text"
    t.integer "parsable_resource_entity_value_start_index"
    t.integer "parsable_resource_entity_value_end_index"
    t.text "wit_ai_server_response"
    t.index ["wit_ai_parse_model_id"], name: "index_wit_ai_parse_model_examples_on_wit_ai_parse_model_id"
  end

  create_table "wit_ai_parse_models", force: :cascade do |t|
    t.string "wit_ai_client_token"
    t.string "wit_ai_server_token"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "apis", "codes"
  add_foreign_key "app_detection_analyses", "app_detections"
  add_foreign_key "app_detection_strategies", "app_detections"
  add_foreign_key "banal_documents", "banal_metadata", column: "banal_metadata_id"
  add_foreign_key "banal_documents", "banal_related_objects"
  add_foreign_key "banal_links", "banal_metadata", column: "banal_metadata_id"
  add_foreign_key "banal_links", "banal_related_objects"
  add_foreign_key "code_link_batches", "code_links"
  add_foreign_key "code_link_types", "types"
  add_foreign_key "code_links", "code_link_types"
  add_foreign_key "codes", "code_links", column: "code_links_id"
  add_foreign_key "ezii_delta_directions", "ezii_delta_gits"
  add_foreign_key "local_law_pipelines", "local_law_pipelines"
  add_foreign_key "mega_os_paths", "comments"
  add_foreign_key "user_text_copies", "ezii_adult_verify_and_signins"
  add_foreign_key "whitelabel_system_extensions", "comments"
  add_foreign_key "wit_ai_parse_model_examples", "wit_ai_parse_models"
end
