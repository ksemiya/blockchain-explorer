// source: exonum/messages.proto
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

var exonum_crypto_types_pb = require('../exonum/crypto/types_pb.js');
goog.object.extend(proto, exonum_crypto_types_pb);
var exonum_runtime_base_pb = require('../exonum/runtime/base_pb.js');
goog.object.extend(proto, exonum_runtime_base_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.exonum.CoreMessage', null, global);
goog.exportSymbol('proto.exonum.CoreMessage.KindCase', null, global);
goog.exportSymbol('proto.exonum.Precommit', null, global);
goog.exportSymbol('proto.exonum.SignedMessage', null, global);
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
proto.exonum.SignedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exonum.SignedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.SignedMessage.displayName = 'proto.exonum.SignedMessage';
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
proto.exonum.CoreMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.exonum.CoreMessage.oneofGroups_);
};
goog.inherits(proto.exonum.CoreMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.CoreMessage.displayName = 'proto.exonum.CoreMessage';
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
proto.exonum.Precommit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exonum.Precommit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.Precommit.displayName = 'proto.exonum.Precommit';
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
proto.exonum.SignedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.SignedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.SignedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.SignedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64(),
    author: (f = msg.getAuthor()) && exonum_crypto_types_pb.PublicKey.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && exonum_crypto_types_pb.Signature.toObject(includeInstance, f)
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
 * @return {!proto.exonum.SignedMessage}
 */
proto.exonum.SignedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.SignedMessage;
  return proto.exonum.SignedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.SignedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.SignedMessage}
 */
proto.exonum.SignedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 2:
      var value = new exonum_crypto_types_pb.PublicKey;
      reader.readMessage(value,exonum_crypto_types_pb.PublicKey.deserializeBinaryFromReader);
      msg.setAuthor(value);
      break;
    case 3:
      var value = new exonum_crypto_types_pb.Signature;
      reader.readMessage(value,exonum_crypto_types_pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
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
proto.exonum.SignedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.SignedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.SignedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.SignedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAuthor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      exonum_crypto_types_pb.PublicKey.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      exonum_crypto_types_pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.exonum.SignedMessage.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes payload = 1;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.exonum.SignedMessage.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.exonum.SignedMessage.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.exonum.SignedMessage} returns this
 */
proto.exonum.SignedMessage.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional crypto.PublicKey author = 2;
 * @return {?proto.exonum.crypto.PublicKey}
 */
proto.exonum.SignedMessage.prototype.getAuthor = function() {
  return /** @type{?proto.exonum.crypto.PublicKey} */ (
    jspb.Message.getWrapperField(this, exonum_crypto_types_pb.PublicKey, 2));
};


/**
 * @param {?proto.exonum.crypto.PublicKey|undefined} value
 * @return {!proto.exonum.SignedMessage} returns this
*/
proto.exonum.SignedMessage.prototype.setAuthor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.SignedMessage} returns this
 */
proto.exonum.SignedMessage.prototype.clearAuthor = function() {
  return this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.SignedMessage.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional crypto.Signature signature = 3;
 * @return {?proto.exonum.crypto.Signature}
 */
proto.exonum.SignedMessage.prototype.getSignature = function() {
  return /** @type{?proto.exonum.crypto.Signature} */ (
    jspb.Message.getWrapperField(this, exonum_crypto_types_pb.Signature, 3));
};


/**
 * @param {?proto.exonum.crypto.Signature|undefined} value
 * @return {!proto.exonum.SignedMessage} returns this
*/
proto.exonum.SignedMessage.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.SignedMessage} returns this
 */
proto.exonum.SignedMessage.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.SignedMessage.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.exonum.CoreMessage.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.exonum.CoreMessage.KindCase = {
  KIND_NOT_SET: 0,
  ANY_TX: 1,
  PRECOMMIT: 2
};

/**
 * @return {proto.exonum.CoreMessage.KindCase}
 */
proto.exonum.CoreMessage.prototype.getKindCase = function() {
  return /** @type {proto.exonum.CoreMessage.KindCase} */(jspb.Message.computeOneofCase(this, proto.exonum.CoreMessage.oneofGroups_[0]));
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
proto.exonum.CoreMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.CoreMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.CoreMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.CoreMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    anyTx: (f = msg.getAnyTx()) && exonum_runtime_base_pb.AnyTx.toObject(includeInstance, f),
    precommit: (f = msg.getPrecommit()) && proto.exonum.Precommit.toObject(includeInstance, f)
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
 * @return {!proto.exonum.CoreMessage}
 */
proto.exonum.CoreMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.CoreMessage;
  return proto.exonum.CoreMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.CoreMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.CoreMessage}
 */
proto.exonum.CoreMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new exonum_runtime_base_pb.AnyTx;
      reader.readMessage(value,exonum_runtime_base_pb.AnyTx.deserializeBinaryFromReader);
      msg.setAnyTx(value);
      break;
    case 2:
      var value = new proto.exonum.Precommit;
      reader.readMessage(value,proto.exonum.Precommit.deserializeBinaryFromReader);
      msg.setPrecommit(value);
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
proto.exonum.CoreMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.CoreMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.CoreMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.CoreMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyTx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      exonum_runtime_base_pb.AnyTx.serializeBinaryToWriter
    );
  }
  f = message.getPrecommit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.exonum.Precommit.serializeBinaryToWriter
    );
  }
};


/**
 * optional runtime.AnyTx any_tx = 1;
 * @return {?proto.exonum.runtime.AnyTx}
 */
proto.exonum.CoreMessage.prototype.getAnyTx = function() {
  return /** @type{?proto.exonum.runtime.AnyTx} */ (
    jspb.Message.getWrapperField(this, exonum_runtime_base_pb.AnyTx, 1));
};


/**
 * @param {?proto.exonum.runtime.AnyTx|undefined} value
 * @return {!proto.exonum.CoreMessage} returns this
*/
proto.exonum.CoreMessage.prototype.setAnyTx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.exonum.CoreMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.CoreMessage} returns this
 */
proto.exonum.CoreMessage.prototype.clearAnyTx = function() {
  return this.setAnyTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.CoreMessage.prototype.hasAnyTx = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Precommit precommit = 2;
 * @return {?proto.exonum.Precommit}
 */
proto.exonum.CoreMessage.prototype.getPrecommit = function() {
  return /** @type{?proto.exonum.Precommit} */ (
    jspb.Message.getWrapperField(this, proto.exonum.Precommit, 2));
};


/**
 * @param {?proto.exonum.Precommit|undefined} value
 * @return {!proto.exonum.CoreMessage} returns this
*/
proto.exonum.CoreMessage.prototype.setPrecommit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.exonum.CoreMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.CoreMessage} returns this
 */
proto.exonum.CoreMessage.prototype.clearPrecommit = function() {
  return this.setPrecommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.CoreMessage.prototype.hasPrecommit = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.exonum.Precommit.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.Precommit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.Precommit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.Precommit.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: jspb.Message.getFieldWithDefault(msg, 1, 0),
    epoch: jspb.Message.getFieldWithDefault(msg, 2, 0),
    round: jspb.Message.getFieldWithDefault(msg, 3, 0),
    proposeHash: (f = msg.getProposeHash()) && exonum_crypto_types_pb.Hash.toObject(includeInstance, f),
    blockHash: (f = msg.getBlockHash()) && exonum_crypto_types_pb.Hash.toObject(includeInstance, f),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.exonum.Precommit}
 */
proto.exonum.Precommit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.Precommit;
  return proto.exonum.Precommit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.Precommit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.Precommit}
 */
proto.exonum.Precommit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValidator(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpoch(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRound(value);
      break;
    case 4:
      var value = new exonum_crypto_types_pb.Hash;
      reader.readMessage(value,exonum_crypto_types_pb.Hash.deserializeBinaryFromReader);
      msg.setProposeHash(value);
      break;
    case 5:
      var value = new exonum_crypto_types_pb.Hash;
      reader.readMessage(value,exonum_crypto_types_pb.Hash.deserializeBinaryFromReader);
      msg.setBlockHash(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
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
proto.exonum.Precommit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.Precommit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.Precommit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.Precommit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getEpoch();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getRound();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getProposeHash();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      exonum_crypto_types_pb.Hash.serializeBinaryToWriter
    );
  }
  f = message.getBlockHash();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      exonum_crypto_types_pb.Hash.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 validator = 1;
 * @return {number}
 */
proto.exonum.Precommit.prototype.getValidator = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.exonum.Precommit} returns this
 */
proto.exonum.Precommit.prototype.setValidator = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 epoch = 2;
 * @return {number}
 */
proto.exonum.Precommit.prototype.getEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.exonum.Precommit} returns this
 */
proto.exonum.Precommit.prototype.setEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 round = 3;
 * @return {number}
 */
proto.exonum.Precommit.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.exonum.Precommit} returns this
 */
proto.exonum.Precommit.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional crypto.Hash propose_hash = 4;
 * @return {?proto.exonum.crypto.Hash}
 */
proto.exonum.Precommit.prototype.getProposeHash = function() {
  return /** @type{?proto.exonum.crypto.Hash} */ (
    jspb.Message.getWrapperField(this, exonum_crypto_types_pb.Hash, 4));
};


/**
 * @param {?proto.exonum.crypto.Hash|undefined} value
 * @return {!proto.exonum.Precommit} returns this
*/
proto.exonum.Precommit.prototype.setProposeHash = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.Precommit} returns this
 */
proto.exonum.Precommit.prototype.clearProposeHash = function() {
  return this.setProposeHash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.Precommit.prototype.hasProposeHash = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional crypto.Hash block_hash = 5;
 * @return {?proto.exonum.crypto.Hash}
 */
proto.exonum.Precommit.prototype.getBlockHash = function() {
  return /** @type{?proto.exonum.crypto.Hash} */ (
    jspb.Message.getWrapperField(this, exonum_crypto_types_pb.Hash, 5));
};


/**
 * @param {?proto.exonum.crypto.Hash|undefined} value
 * @return {!proto.exonum.Precommit} returns this
*/
proto.exonum.Precommit.prototype.setBlockHash = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.Precommit} returns this
 */
proto.exonum.Precommit.prototype.clearBlockHash = function() {
  return this.setBlockHash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.Precommit.prototype.hasBlockHash = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.exonum.Precommit.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.exonum.Precommit} returns this
*/
proto.exonum.Precommit.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.Precommit} returns this
 */
proto.exonum.Precommit.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.Precommit.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.exonum);
