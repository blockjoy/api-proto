# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: authentication_service.proto for package 'blockjoy.api.ui_v1'

require 'grpc'
require 'authentication_service_pb'

module Blockjoy
  module Api
    module UiV1
      module AuthenticationService
        # Retrieve and refresh API token 
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'blockjoy.api.ui_v1.AuthenticationService'

          # Login user, i.e. retrieve token 
          rpc :Login, ::Blockjoy::Api::UiV1::LoginUserRequest, ::Blockjoy::Api::UiV1::LoginUserResponse
          #
          # Refresh API token. TODO: Do we really need that?
          rpc :Refresh, ::Blockjoy::Api::UiV1::RefreshTokenRequest, ::Blockjoy::Api::UiV1::RefreshTokenResponse
        end

        Stub = Service.rpc_stub_class
      end
    end
  end
end