import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.evidence.v1beta1";
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequest {
  /** evidence_hash defines the hash of the requested evidence. */
  evidenceHash: Uint8Array;
}
export interface QueryEvidenceRequestProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest";
  value: Uint8Array;
}
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequestAmino {
  /** evidence_hash defines the hash of the requested evidence. */
  evidence_hash?: string;
}
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequestSDKType {
  evidence_hash: Uint8Array;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponse {
  /** evidence returns the requested evidence. */
  evidence?: Any;
}
export interface QueryEvidenceResponseProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse";
  value: Uint8Array;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponseAmino {
  /** evidence returns the requested evidence. */
  evidence?: AnyAmino;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponseSDKType {
  evidence?: AnySDKType;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllEvidenceRequestProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest";
  value: Uint8Array;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponse {
  /** evidence returns all evidences. */
  evidence: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllEvidenceResponseProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse";
  value: Uint8Array;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponseAmino {
  /** evidence returns all evidences. */
  evidence?: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponseSDKType {
  evidence: AnySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryEvidenceRequest(): QueryEvidenceRequest {
  return {
    evidenceHash: new Uint8Array()
  };
}
export const QueryEvidenceRequest = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
  aminoType: "cosmos-sdk/QueryEvidenceRequest",
  encode(message: QueryEvidenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evidenceHash.length !== 0) {
      writer.uint32(10).bytes(message.evidenceHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryEvidenceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEvidenceRequest {
    const obj = createBaseQueryEvidenceRequest();
    if (isSet(object.evidenceHash)) obj.evidenceHash = bytesFromBase64(object.evidenceHash);
    return obj;
  },
  toJSON(message: QueryEvidenceRequest): unknown {
    const obj: any = {};
    message.evidenceHash !== undefined && (obj.evidenceHash = base64FromBytes(message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEvidenceRequest>): QueryEvidenceRequest {
    const message = createBaseQueryEvidenceRequest();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryEvidenceRequestSDKType): QueryEvidenceRequest {
    return {
      evidenceHash: object?.evidence_hash
    };
  },
  toSDK(message: QueryEvidenceRequest): QueryEvidenceRequestSDKType {
    const obj: any = {};
    obj.evidence_hash = message.evidenceHash;
    return obj;
  },
  fromAmino(object: QueryEvidenceRequestAmino): QueryEvidenceRequest {
    const message = createBaseQueryEvidenceRequest();
    if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
      message.evidenceHash = bytesFromBase64(object.evidence_hash);
    }
    return message;
  },
  toAmino(message: QueryEvidenceRequest, useInterfaces: boolean = true): QueryEvidenceRequestAmino {
    const obj: any = {};
    obj.evidence_hash = message.evidenceHash ? base64FromBytes(message.evidenceHash) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryEvidenceRequestProtoMsg, useInterfaces: boolean = true): QueryEvidenceRequest {
    return QueryEvidenceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryEvidenceRequest): Uint8Array {
    return QueryEvidenceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEvidenceRequest): QueryEvidenceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
      value: QueryEvidenceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEvidenceResponse(): QueryEvidenceResponse {
  return {
    evidence: undefined
  };
}
export const QueryEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
  aminoType: "cosmos-sdk/QueryEvidenceResponse",
  encode(message: QueryEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evidence !== undefined) {
      Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEvidenceResponse {
    const obj = createBaseQueryEvidenceResponse();
    if (isSet(object.evidence)) obj.evidence = Any.fromJSON(object.evidence);
    return obj;
  },
  toJSON(message: QueryEvidenceResponse): unknown {
    const obj: any = {};
    message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEvidenceResponse>): QueryEvidenceResponse {
    const message = createBaseQueryEvidenceResponse();
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Any.fromPartial(object.evidence);
    }
    return message;
  },
  fromSDK(object: QueryEvidenceResponseSDKType): QueryEvidenceResponse {
    return {
      evidence: object.evidence ? Any.fromSDK(object.evidence) : undefined
    };
  },
  toSDK(message: QueryEvidenceResponse): QueryEvidenceResponseSDKType {
    const obj: any = {};
    message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toSDK(message.evidence) : undefined);
    return obj;
  },
  fromAmino(object: QueryEvidenceResponseAmino): QueryEvidenceResponse {
    const message = createBaseQueryEvidenceResponse();
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Any.fromAmino(object.evidence);
    }
    return message;
  },
  toAmino(message: QueryEvidenceResponse, useInterfaces: boolean = true): QueryEvidenceResponseAmino {
    const obj: any = {};
    obj.evidence = message.evidence ? Any.toAmino(message.evidence, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryEvidenceResponseProtoMsg, useInterfaces: boolean = true): QueryEvidenceResponse {
    return QueryEvidenceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryEvidenceResponse): Uint8Array {
    return QueryEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEvidenceResponse): QueryEvidenceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
      value: QueryEvidenceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEvidenceRequest(): QueryAllEvidenceRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllEvidenceRequest = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
  aminoType: "cosmos-sdk/QueryAllEvidenceRequest",
  encode(message: QueryAllEvidenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllEvidenceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllEvidenceRequest {
    const obj = createBaseQueryAllEvidenceRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllEvidenceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllEvidenceRequest>): QueryAllEvidenceRequest {
    const message = createBaseQueryAllEvidenceRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllEvidenceRequestSDKType): QueryAllEvidenceRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllEvidenceRequestAmino): QueryAllEvidenceRequest {
    const message = createBaseQueryAllEvidenceRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEvidenceRequest, useInterfaces: boolean = true): QueryAllEvidenceRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllEvidenceRequestProtoMsg, useInterfaces: boolean = true): QueryAllEvidenceRequest {
    return QueryAllEvidenceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllEvidenceRequest): Uint8Array {
    return QueryAllEvidenceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
      value: QueryAllEvidenceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllEvidenceResponse(): QueryAllEvidenceResponse {
  return {
    evidence: [],
    pagination: undefined
  };
}
export const QueryAllEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
  aminoType: "cosmos-sdk/QueryAllEvidenceResponse",
  encode(message: QueryAllEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.evidence) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Any.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllEvidenceResponse {
    const obj = createBaseQueryAllEvidenceResponse();
    if (Array.isArray(object?.evidence)) obj.evidence = object.evidence.map((e: any) => Any.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllEvidenceResponse): unknown {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.evidence = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllEvidenceResponse>): QueryAllEvidenceResponse {
    const message = createBaseQueryAllEvidenceResponse();
    message.evidence = object.evidence?.map(e => Any.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllEvidenceResponseSDKType): QueryAllEvidenceResponse {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Any.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseSDKType {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.evidence = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllEvidenceResponseAmino): QueryAllEvidenceResponse {
    const message = createBaseQueryAllEvidenceResponse();
    message.evidence = object.evidence?.map(e => Any.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEvidenceResponse, useInterfaces: boolean = true): QueryAllEvidenceResponseAmino {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Any.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.evidence = message.evidence;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllEvidenceResponseProtoMsg, useInterfaces: boolean = true): QueryAllEvidenceResponse {
    return QueryAllEvidenceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllEvidenceResponse): Uint8Array {
    return QueryAllEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
      value: QueryAllEvidenceResponse.encode(message).finish()
    };
  }
};