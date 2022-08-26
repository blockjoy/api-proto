// source: update_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.blockjoy.api.ui_v1.GetUpdatesRequest', null, global);
goog.exportSymbol('proto.blockjoy.api.ui_v1.GetUpdatesResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blockjoy.api.ui_v1.GetUpdatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blockjoy.api.ui_v1.GetUpdatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blockjoy.api.ui_v1.GetUpdatesRequest.displayName = 'proto.blockjoy.api.ui_v1.GetUpdatesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blockjoy.api.ui_v1.GetUpdatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blockjoy.api.ui_v1.GetUpdatesResponse.displayName = 'proto.blockjoy.api.ui_v1.GetUpdatesResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blockjoy.api.ui_v1.GetUpdatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.blockjoy.api.ui_v1.GetUpdatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blockjoy.api.ui_v1.GetUpdatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blockjoy.api.ui_v1.GetUpdatesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && common_pb.RequestMeta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blockjoy.api.ui_v1.GetUpdatesRequest}
 */
proto.blockjoy.api.ui_v1.GetUpdatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blockjoy.api.ui_v1.GetUpdatesRequest;
  return proto.blockjoy.api.ui_v1.GetUpdatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blockjoy.api.ui_v1.GetUpdatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blockjoy.api.ui_v1.GetUpdatesRequest}
 */
proto.blockjoy.api.ui_v1.GetUpdatesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.RequestMeta;
      reader.readMessage(value,common_pb.RequestMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blockjoy.api.ui_v1.GetUpdatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blockjoy.api.ui_v1.GetUpdatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blockjoy.api.ui_v1.GetUpdatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blockjoy.api.ui_v1.GetUpdatesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.RequestMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestMeta meta = 1;
 * @return {?proto.blockjoy.api.ui_v1.RequestMeta}
 */
proto.blockjoy.api.ui_v1.GetUpdatesRequest.prototype.getMeta = function() {
  return /** @type{?proto.blockjoy.api.ui_v1.RequestMeta} */ (
    jspb.Message.getWrapperField(this, common_pb.RequestMeta, 1));
};


/**
 * @param {?proto.blockjoy.api.ui_v1.RequestMeta|undefined} value
 * @return {!proto.blockjoy.api.ui_v1.GetUpdatesRequest} returns this
*/
proto.blockjoy.api.ui_v1.GetUpdatesRequest.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.blockjoy.api.ui_v1.GetUpdatesRequest} returns this
 */
proto.blockjoy.api.ui_v1.GetUpdatesRequest.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blockjoy.api.ui_v1.GetUpdatesRequest.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.blockjoy.api.ui_v1.GetUpdatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blockjoy.api.ui_v1.GetUpdatesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && common_pb.ResponseMeta.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && common_pb.InfoUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blockjoy.api.ui_v1.GetUpdatesResponse}
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blockjoy.api.ui_v1.GetUpdatesResponse;
  return proto.blockjoy.api.ui_v1.GetUpdatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blockjoy.api.ui_v1.GetUpdatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blockjoy.api.ui_v1.GetUpdatesResponse}
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.ResponseMeta;
      reader.readMessage(value,common_pb.ResponseMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new common_pb.InfoUpdate;
      reader.readMessage(value,common_pb.InfoUpdate.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blockjoy.api.ui_v1.GetUpdatesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blockjoy.api.ui_v1.GetUpdatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.ResponseMeta.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.InfoUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseMeta meta = 1;
 * @return {?proto.blockjoy.api.ui_v1.ResponseMeta}
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.prototype.getMeta = function() {
  return /** @type{?proto.blockjoy.api.ui_v1.ResponseMeta} */ (
    jspb.Message.getWrapperField(this, common_pb.ResponseMeta, 1));
};


/**
 * @param {?proto.blockjoy.api.ui_v1.ResponseMeta|undefined} value
 * @return {!proto.blockjoy.api.ui_v1.GetUpdatesResponse} returns this
*/
proto.blockjoy.api.ui_v1.GetUpdatesResponse.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.blockjoy.api.ui_v1.GetUpdatesResponse} returns this
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InfoUpdate update = 2;
 * @return {?proto.blockjoy.api.ui_v1.InfoUpdate}
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.prototype.getUpdate = function() {
  return /** @type{?proto.blockjoy.api.ui_v1.InfoUpdate} */ (
    jspb.Message.getWrapperField(this, common_pb.InfoUpdate, 2));
};


/**
 * @param {?proto.blockjoy.api.ui_v1.InfoUpdate|undefined} value
 * @return {!proto.blockjoy.api.ui_v1.GetUpdatesResponse} returns this
*/
proto.blockjoy.api.ui_v1.GetUpdatesResponse.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.blockjoy.api.ui_v1.GetUpdatesResponse} returns this
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blockjoy.api.ui_v1.GetUpdatesResponse.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.blockjoy.api.ui_v1);