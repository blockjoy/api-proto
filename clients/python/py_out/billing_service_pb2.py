# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing_service.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import common_pb2 as common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15\x62illing_service.proto\x12\x12\x62lockjoy.api.ui_v1\x1a\x0c\x63ommon.proto\"\xb8\x01\n\x11\x43reateBillRequest\x12-\n\x04meta\x18\x01 \x01(\x0b\x32\x1f.blockjoy.api.ui_v1.RequestMeta\x12.\n\x07user_id\x18\x02 \x01(\x0b\x32\x18.blockjoy.api.ui_v1.UuidH\x00\x88\x01\x01\x12-\n\x06org_id\x18\x03 \x01(\x0b\x32\x18.blockjoy.api.ui_v1.UuidH\x01\x88\x01\x01\x42\n\n\x08_user_idB\t\n\x07_org_id\"l\n\x12\x43reateBillResponse\x12.\n\x04meta\x18\x01 \x01(\x0b\x32 .blockjoy.api.ui_v1.ResponseMeta\x12&\n\x04\x62ill\x18\x02 \x01(\x0b\x32\x18.blockjoy.api.ui_v1.Bill2k\n\x0e\x42illingService\x12Y\n\x06\x43reate\x12%.blockjoy.api.ui_v1.CreateBillRequest\x1a&.blockjoy.api.ui_v1.CreateBillResponse\"\x00\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'billing_service_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _CREATEBILLREQUEST._serialized_start=60
  _CREATEBILLREQUEST._serialized_end=244
  _CREATEBILLRESPONSE._serialized_start=246
  _CREATEBILLRESPONSE._serialized_end=354
  _BILLINGSERVICE._serialized_start=356
  _BILLINGSERVICE._serialized_end=463
# @@protoc_insertion_point(module_scope)