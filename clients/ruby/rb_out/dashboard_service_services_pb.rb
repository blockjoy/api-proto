# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: dashboard_service.proto for package 'blockjoy.api.ui_v1'

require 'grpc'
require 'dashboard_service_pb'

module Blockjoy
  module Api
    module UiV1
      module DashboardService
        # Get dashboard KPIs 
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'blockjoy.api.ui_v1.DashboardService'

          # Get dashboard KPIs for nodes/hosts etc. 
          rpc :KPIs, ::Blockjoy::Api::UiV1::DashboardKpiRequest, ::Blockjoy::Api::UiV1::DashboardKpiResponse
        end

        Stub = Service.rpc_stub_class
      end
    end
  end
end