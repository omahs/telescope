import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export const protobufPackage = "osmosis.lockup";
export interface Params {
  forceUnlockAllowedAddresses: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.lockup.Params";
  value: Uint8Array;
}
export interface ParamsSDKType {
  force_unlock_allowed_addresses: string[];
}
function createBaseParams(): Params {
  return {
    forceUnlockAllowedAddresses: []
  };
}
export const Params = {
  typeUrl: "/osmosis.lockup.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.forceUnlockAllowedAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forceUnlockAllowedAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (Array.isArray(object?.forceUnlockAllowedAddresses)) obj.forceUnlockAllowedAddresses = object.forceUnlockAllowedAddresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.forceUnlockAllowedAddresses) {
      obj.forceUnlockAllowedAddresses = message.forceUnlockAllowedAddresses.map(e => e);
    } else {
      obj.forceUnlockAllowedAddresses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.forceUnlockAllowedAddresses = object.forceUnlockAllowedAddresses?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      forceUnlockAllowedAddresses: Array.isArray(object?.force_unlock_allowed_addresses) ? object.force_unlock_allowed_addresses.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      force_unlock_allowed_addresses: Array.isArray(object?.force_unlock_allowed_addresses) ? object.force_unlock_allowed_addresses.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.forceUnlockAllowedAddresses) {
      obj.force_unlock_allowed_addresses = message.forceUnlockAllowedAddresses.map(e => e);
    } else {
      obj.force_unlock_allowed_addresses = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.forceUnlockAllowedAddresses = object.force_unlock_allowed_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.forceUnlockAllowedAddresses) {
      obj.force_unlock_allowed_addresses = message.forceUnlockAllowedAddresses.map(e => e);
    } else {
      obj.force_unlock_allowed_addresses = message.forceUnlockAllowedAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/lockup/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.Params",
      value: Params.encode(message).finish()
    };
  }
};