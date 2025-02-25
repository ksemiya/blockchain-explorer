// source: exonum/proofs.proto
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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var exonum_blockchain_pb = require('../exonum/blockchain_pb.js');
goog.object.extend(proto, exonum_blockchain_pb);
var exonum_messages_pb = require('../exonum/messages_pb.js');
goog.object.extend(proto, exonum_messages_pb);
var exonum_runtime_errors_pb = require('../exonum/runtime/errors_pb.js');
goog.object.extend(proto, exonum_runtime_errors_pb);
var exonum_proof_map_proof_pb = require('../exonum/proof/map_proof_pb.js');
goog.object.extend(proto, exonum_proof_map_proof_pb);
goog.exportSymbol('proto.exonum.BlockProof', null, global);
goog.exportSymbol('proto.exonum.CallProof', null, global);
goog.exportSymbol('proto.exonum.IndexProof', null, global);
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
proto.exonum.BlockProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.exonum.BlockProof.repeatedFields_, null);
};
goog.inherits(proto.exonum.BlockProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.BlockProof.displayName = 'proto.exonum.BlockProof';
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
proto.exonum.IndexProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exonum.IndexProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.IndexProof.displayName = 'proto.exonum.IndexProof';
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
proto.exonum.CallProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.exonum.CallProof.repeatedFields_, null);
};
goog.inherits(proto.exonum.CallProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.CallProof.displayName = 'proto.exonum.CallProof';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.exonum.BlockProof.repeatedFields_ = [2];



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
proto.exonum.BlockProof.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.BlockProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.BlockProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.BlockProof.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && exonum_blockchain_pb.Block.toObject(includeInstance, f),
    precommitsList: jspb.Message.toObjectList(msg.getPrecommitsList(),
    exonum_messages_pb.SignedMessage.toObject, includeInstance)
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
 * @return {!proto.exonum.BlockProof}
 */
proto.exonum.BlockProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.BlockProof;
  return proto.exonum.BlockProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.BlockProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.BlockProof}
 */
proto.exonum.BlockProof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new exonum_blockchain_pb.Block;
      reader.readMessage(value,exonum_blockchain_pb.Block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 2:
      var value = new exonum_messages_pb.SignedMessage;
      reader.readMessage(value,exonum_messages_pb.SignedMessage.deserializeBinaryFromReader);
      msg.addPrecommits(value);
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
proto.exonum.BlockProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.BlockProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.BlockProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.BlockProof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      exonum_blockchain_pb.Block.serializeBinaryToWriter
    );
  }
  f = message.getPrecommitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      exonum_messages_pb.SignedMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional Block block = 1;
 * @return {?proto.exonum.Block}
 */
proto.exonum.BlockProof.prototype.getBlock = function() {
  return /** @type{?proto.exonum.Block} */ (
    jspb.Message.getWrapperField(this, exonum_blockchain_pb.Block, 1));
};


/**
 * @param {?proto.exonum.Block|undefined} value
 * @return {!proto.exonum.BlockProof} returns this
*/
proto.exonum.BlockProof.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.BlockProof} returns this
 */
proto.exonum.BlockProof.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.BlockProof.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SignedMessage precommits = 2;
 * @return {!Array<!proto.exonum.SignedMessage>}
 */
proto.exonum.BlockProof.prototype.getPrecommitsList = function() {
  return /** @type{!Array<!proto.exonum.SignedMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, exonum_messages_pb.SignedMessage, 2));
};


/**
 * @param {!Array<!proto.exonum.SignedMessage>} value
 * @return {!proto.exonum.BlockProof} returns this
*/
proto.exonum.BlockProof.prototype.setPrecommitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.exonum.SignedMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.exonum.SignedMessage}
 */
proto.exonum.BlockProof.prototype.addPrecommits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.exonum.SignedMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.exonum.BlockProof} returns this
 */
proto.exonum.BlockProof.prototype.clearPrecommitsList = function() {
  return this.setPrecommitsList([]);
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
proto.exonum.IndexProof.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.IndexProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.IndexProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.IndexProof.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockProof: (f = msg.getBlockProof()) && proto.exonum.BlockProof.toObject(includeInstance, f),
    indexProof: (f = msg.getIndexProof()) && exonum_proof_map_proof_pb.MapProof.toObject(includeInstance, f)
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
 * @return {!proto.exonum.IndexProof}
 */
proto.exonum.IndexProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.IndexProof;
  return proto.exonum.IndexProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.IndexProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.IndexProof}
 */
proto.exonum.IndexProof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.exonum.BlockProof;
      reader.readMessage(value,proto.exonum.BlockProof.deserializeBinaryFromReader);
      msg.setBlockProof(value);
      break;
    case 2:
      var value = new exonum_proof_map_proof_pb.MapProof;
      reader.readMessage(value,exonum_proof_map_proof_pb.MapProof.deserializeBinaryFromReader);
      msg.setIndexProof(value);
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
proto.exonum.IndexProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.IndexProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.IndexProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.IndexProof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockProof();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.exonum.BlockProof.serializeBinaryToWriter
    );
  }
  f = message.getIndexProof();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      exonum_proof_map_proof_pb.MapProof.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockProof block_proof = 1;
 * @return {?proto.exonum.BlockProof}
 */
proto.exonum.IndexProof.prototype.getBlockProof = function() {
  return /** @type{?proto.exonum.BlockProof} */ (
    jspb.Message.getWrapperField(this, proto.exonum.BlockProof, 1));
};


/**
 * @param {?proto.exonum.BlockProof|undefined} value
 * @return {!proto.exonum.IndexProof} returns this
*/
proto.exonum.IndexProof.prototype.setBlockProof = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.IndexProof} returns this
 */
proto.exonum.IndexProof.prototype.clearBlockProof = function() {
  return this.setBlockProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.IndexProof.prototype.hasBlockProof = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proof.MapProof index_proof = 2;
 * @return {?proto.exonum.proof.MapProof}
 */
proto.exonum.IndexProof.prototype.getIndexProof = function() {
  return /** @type{?proto.exonum.proof.MapProof} */ (
    jspb.Message.getWrapperField(this, exonum_proof_map_proof_pb.MapProof, 2));
};


/**
 * @param {?proto.exonum.proof.MapProof|undefined} value
 * @return {!proto.exonum.IndexProof} returns this
*/
proto.exonum.IndexProof.prototype.setIndexProof = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.IndexProof} returns this
 */
proto.exonum.IndexProof.prototype.clearIndexProof = function() {
  return this.setIndexProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.IndexProof.prototype.hasIndexProof = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.exonum.CallProof.repeatedFields_ = [4];



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
proto.exonum.CallProof.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.CallProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.CallProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.CallProof.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockProof: (f = msg.getBlockProof()) && proto.exonum.BlockProof.toObject(includeInstance, f),
    callProof: (f = msg.getCallProof()) && exonum_proof_map_proof_pb.MapProof.toObject(includeInstance, f),
    errorDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    errorBacktraceList: jspb.Message.toObjectList(msg.getErrorBacktraceList(),
    exonum_runtime_errors_pb.CallSite.toObject, includeInstance)
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
 * @return {!proto.exonum.CallProof}
 */
proto.exonum.CallProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.CallProof;
  return proto.exonum.CallProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.CallProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.CallProof}
 */
proto.exonum.CallProof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.exonum.BlockProof;
      reader.readMessage(value,proto.exonum.BlockProof.deserializeBinaryFromReader);
      msg.setBlockProof(value);
      break;
    case 2:
      var value = new exonum_proof_map_proof_pb.MapProof;
      reader.readMessage(value,exonum_proof_map_proof_pb.MapProof.deserializeBinaryFromReader);
      msg.setCallProof(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorDescription(value);
      break;
    case 4:
      var value = new exonum_runtime_errors_pb.CallSite;
      reader.readMessage(value,exonum_runtime_errors_pb.CallSite.deserializeBinaryFromReader);
      msg.addErrorBacktrace(value);
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
proto.exonum.CallProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.CallProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.CallProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.CallProof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockProof();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.exonum.BlockProof.serializeBinaryToWriter
    );
  }
  f = message.getCallProof();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      exonum_proof_map_proof_pb.MapProof.serializeBinaryToWriter
    );
  }
  f = message.getErrorDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getErrorBacktraceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      exonum_runtime_errors_pb.CallSite.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockProof block_proof = 1;
 * @return {?proto.exonum.BlockProof}
 */
proto.exonum.CallProof.prototype.getBlockProof = function() {
  return /** @type{?proto.exonum.BlockProof} */ (
    jspb.Message.getWrapperField(this, proto.exonum.BlockProof, 1));
};


/**
 * @param {?proto.exonum.BlockProof|undefined} value
 * @return {!proto.exonum.CallProof} returns this
*/
proto.exonum.CallProof.prototype.setBlockProof = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.CallProof} returns this
 */
proto.exonum.CallProof.prototype.clearBlockProof = function() {
  return this.setBlockProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.CallProof.prototype.hasBlockProof = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proof.MapProof call_proof = 2;
 * @return {?proto.exonum.proof.MapProof}
 */
proto.exonum.CallProof.prototype.getCallProof = function() {
  return /** @type{?proto.exonum.proof.MapProof} */ (
    jspb.Message.getWrapperField(this, exonum_proof_map_proof_pb.MapProof, 2));
};


/**
 * @param {?proto.exonum.proof.MapProof|undefined} value
 * @return {!proto.exonum.CallProof} returns this
*/
proto.exonum.CallProof.prototype.setCallProof = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.CallProof} returns this
 */
proto.exonum.CallProof.prototype.clearCallProof = function() {
  return this.setCallProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.CallProof.prototype.hasCallProof = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string error_description = 3;
 * @return {string}
 */
proto.exonum.CallProof.prototype.getErrorDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.exonum.CallProof} returns this
 */
proto.exonum.CallProof.prototype.setErrorDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated runtime.CallSite error_backtrace = 4;
 * @return {!Array<!proto.exonum.runtime.CallSite>}
 */
proto.exonum.CallProof.prototype.getErrorBacktraceList = function() {
  return /** @type{!Array<!proto.exonum.runtime.CallSite>} */ (
    jspb.Message.getRepeatedWrapperField(this, exonum_runtime_errors_pb.CallSite, 4));
};


/**
 * @param {!Array<!proto.exonum.runtime.CallSite>} value
 * @return {!proto.exonum.CallProof} returns this
*/
proto.exonum.CallProof.prototype.setErrorBacktraceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.exonum.runtime.CallSite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.exonum.runtime.CallSite}
 */
proto.exonum.CallProof.prototype.addErrorBacktrace = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.exonum.runtime.CallSite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.exonum.CallProof} returns this
 */
proto.exonum.CallProof.prototype.clearErrorBacktraceList = function() {
  return this.setErrorBacktraceList([]);
};


goog.object.extend(exports, proto.exonum);
