# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: authentication_service.proto

require 'google/protobuf'

require 'common_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("authentication_service.proto", :syntax => :proto3) do
    add_message "blockjoy.api.ui_v1.LoginUserRequest" do
      optional :meta, :message, 1, "blockjoy.api.ui_v1.RequestMeta"
      optional :email, :string, 2
      optional :password, :string, 3
    end
    add_message "blockjoy.api.ui_v1.LoginUserResponse" do
      optional :meta, :message, 1, "blockjoy.api.ui_v1.ResponseMeta"
      optional :token, :message, 2, "blockjoy.api.ui_v1.ApiToken"
    end
    add_message "blockjoy.api.ui_v1.RefreshTokenRequest" do
      optional :meta, :message, 1, "blockjoy.api.ui_v1.RequestMeta"
    end
    add_message "blockjoy.api.ui_v1.RefreshTokenResponse" do
      optional :meta, :message, 1, "blockjoy.api.ui_v1.ResponseMeta"
    end
  end
end

module Blockjoy
  module Api
    module UiV1
      LoginUserRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("blockjoy.api.ui_v1.LoginUserRequest").msgclass
      LoginUserResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("blockjoy.api.ui_v1.LoginUserResponse").msgclass
      RefreshTokenRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("blockjoy.api.ui_v1.RefreshTokenRequest").msgclass
      RefreshTokenResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("blockjoy.api.ui_v1.RefreshTokenResponse").msgclass
    end
  end
end